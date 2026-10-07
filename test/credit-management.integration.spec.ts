import 'dotenv/config';
import { randomUUID } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import pg from 'pg';
import type Stripe from 'stripe';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { BillingCycle, CreditTransactionType, PrismaClient, SubscriptionStatus } from '../generated/prisma/client.js';
import { CreditService } from '../src/credit/credit.service.js';
import { PrismaService } from '../src/prisma/prisma.service.js';
import { StripeService } from '../src/stripe/stripe.service.js';
import { WebhookService } from '../src/webhook/webhook.service.js';

// Opt-in: use a disposable PostgreSQL schema, never the application's tables.
const enabled = process.env.RUN_CREDIT_INTEGRATION_TESTS === '1';
const suite = enabled ? describe : describe.skip;

suite('credit management on PostgreSQL', () => {
  const schema = `credit_test_${randomUUID().replaceAll('-', '')}`;
  let admin: pg.Client;
  let prisma: PrismaClient;
  let credits: CreditService;
  const june = new Date('2026-06-25T10:00:00Z');
  const july = new Date('2026-07-25T10:00:00Z');
  const august = new Date('2026-08-25T10:00:00Z');

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');
    const url = new URL(process.env.DATABASE_URL);
    url.searchParams.delete('schema');
    admin = new pg.Client({ connectionString: url.toString() });
    await admin.connect();
    await admin.query(`CREATE SCHEMA "${schema}"`);
    await admin.query(`SET search_path TO "${schema}"`);
    const migrations = resolve('prisma/migrations');
    for (const entry of (await readdir(migrations, { withFileTypes: true })).filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
      const sql = await readFile(resolve(migrations, entry.name, 'migration.sql'), 'utf8');
      // One historical migration explicitly qualifies a type with public.
      // Apply that qualifier to the disposable schema only.
      await admin.query(sql.replaceAll('"public".', `"${schema}".`));
    }
    url.searchParams.set('schema', schema);
    prisma = new PrismaClient({ datasources: { db: { url: url.toString() } } });
    await prisma.$connect();
    credits = new CreditService(prisma as PrismaService);
  }, 30_000);

  afterAll(async () => {
    await prisma?.$disconnect();
    if (admin && /^credit_test_[a-f0-9]{32}$/.test(schema)) {
      await admin.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
      await admin.end();
    }
  });

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(june);
  });
  afterEach(() => { vi.useRealTimers(); vi.restoreAllMocks(); });

  async function user() {
    return prisma.user.create({ data: { email: `${randomUUID()}@credit-test.invalid`, password: 'test-only' } });
  }

  async function paidSubscription(annual = false, free = false) {
    const owner = await user();
    const price = await prisma.subscriptionPrice.create({
      data: {
        billingCycle: annual ? BillingCycle.ANNUALLY : BillingCycle.MONTHLY,
        price: free ? 0 : annual ? 100 : 10, currency: 'usd', monthlyCredits: free ? 50 : 100,
        stripePriceId: `price_${randomUUID()}`,
        subscriptionPlan: { create: { name: `PRO-${randomUUID()}` } },
      },
    });
    const end = annual ? new Date('2027-06-25T10:00:00Z') : july;
    const subscription = await prisma.subscription.create({
      data: {
        userId: owner.id, subscriptionPriceId: price.id, stripeSubscriptionId: `sub_${randomUUID()}`,
        status: SubscriptionStatus.ACTIVE, startedAt: june, currentPeriodStart: june,
        currentPeriodEnd: end, nextCreditRefillAt: july,
      },
    });
    const remote = {
      id: subscription.stripeSubscriptionId, metadata: { userId: owner.id, subscriptionPriceId: price.id },
      status: 'active', start_date: june.getTime() / 1000,
      canceled_at: null, ended_at: null, cancel_at_period_end: false,
      items: { data: [{ price: { id: price.stripePriceId }, current_period_start: june.getTime() / 1000, current_period_end: end.getTime() / 1000 }] },
    } as unknown as Stripe.Subscription;
    const stripe = { client: { subscriptions: { retrieve: vi.fn().mockResolvedValue(remote) } } } as unknown as StripeService;
    const webhook = new WebhookService(prisma as PrismaService, credits, stripe);
    const invoiceId = `in_${randomUUID()}`;
    function event(eventId = `evt_${randomUUID()}`, start = june, periodEnd = end) {
      return {
        id: eventId, type: 'invoice.paid', data: { object: {
          id: invoiceId, status: 'paid', amount_paid: free ? 0 : annual ? 10000 : 1000, currency: 'usd',
          billing_reason: 'subscription_cycle',
          parent: { subscription_details: { subscription: subscription.stripeSubscriptionId } },
          lines: { data: [{ period: { start: start.getTime() / 1000, end: periodEnd.getTime() / 1000 },
            parent: { subscription_item_details: { subscription: subscription.stripeSubscriptionId, proration: false } } }] },
        } },
      } as unknown as Stripe.Event;
    }
    return { owner, subscription, price, remote, webhook, event };
  }

  it('grants Free 50 and resets leftovers without touching addon credits', async () => {
    const fixture = await paidSubscription(false, true);
    const owner = fixture.owner;
    expect((await credits.getBalance(owner.id)).subscriptionBalance).toBe(0);
    const event = fixture.event();
    await fixture.webhook.handleEvent(event);
    await fixture.webhook.handleEvent(event);
    expect((await credits.getBalance(owner.id)).subscriptionBalance).toBe(50);
    await prisma.creditAccount.update({ where: { userId: owner.id }, data: { addonBalance: 20 } });
    await credits.consumeCredits(owner.id, { amount: 30 });
    vi.setSystemTime(july);
    await credits.refreshDueCredits(july);
    expect(await credits.getBalance(owner.id)).toEqual({ subscriptionBalance: 50, addonBalance: 20, totalBalance: 70 });
    const history = await credits.getTransactionHistory(owner.id);
    expect(history.filter((row) => row.type === CreditTransactionType.SUBSCRIPTION_ALLOCATION)).toHaveLength(2);
    expect(history.find((row) => row.type === CreditTransactionType.RESET)?.amount).toBe(-20);
  });

  it('does not grant a paid subscription before invoice payment succeeds', async () => {
    const fixture = await paidSubscription();
    expect((await credits.getBalance(fixture.owner.id)).totalBalance).toBe(0);
    expect(await credits.getTransactionHistory(fixture.owner.id)).toHaveLength(0);
  });

  it('handles simultaneous duplicate events and distinct events for the same invoice once', async () => {
    const fixture = await paidSubscription();
    const event = fixture.event();
    await Promise.all([fixture.webhook.handleEvent(event), fixture.webhook.handleEvent(event), fixture.webhook.handleEvent(fixture.event())]);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
    expect(await credits.getTransactionHistory(fixture.owner.id)).toHaveLength(1);
    expect(await prisma.billingTransaction.count({ where: { subscriptionId: fixture.subscription.id } })).toBe(1);
  });

  it('expires unpaid monthly credits and keeps the original date after a late payment', async () => {
    const fixture = await paidSubscription();
    await fixture.webhook.handleEvent(fixture.event());
    await credits.consumeCredits(fixture.owner.id, { amount: 20 });
    vi.setSystemTime(july);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(0);
    vi.setSystemTime(new Date('2026-07-28T10:00:00Z'));
    const renewal = fixture.event(undefined, july, august);
    (renewal.data.object as Stripe.Invoice).id = `in_${randomUUID()}`;
    await fixture.webhook.handleEvent(renewal);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
    const account = await prisma.creditAccount.findUniqueOrThrow({ where: { userId: fixture.owner.id } });
    expect(account.subscriptionCreditExpiresAt).toEqual(august);
  });

  it('refills annual subscriptions monthly and catches up without accumulating skipped quotas', async () => {
    const fixture = await paidSubscription(true);
    await fixture.webhook.handleEvent(fixture.event());
    await credits.consumeCredits(fixture.owner.id, { amount: 30 });
    vi.setSystemTime(july);
    await credits.refreshDueCredits(july);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
    vi.setSystemTime(new Date('2026-10-26T10:00:00Z'));
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
    const subscription = await prisma.subscription.findUniqueOrThrow({ where: { id: fixture.subscription.id } });
    expect(subscription.nextCreditRefillAt.toISOString()).toBe('2026-11-25T10:00:00.000Z');
    expect((await credits.getTransactionHistory(fixture.owner.id)).filter((row) => row.type === CreditTransactionType.SUBSCRIPTION_ALLOCATION)).toHaveLength(3);
  });

  it('cannot overspend when two requests consume the same balance concurrently', async () => {
    const fixture = await paidSubscription();
    await fixture.webhook.handleEvent(fixture.event());
    const outcomes = await Promise.allSettled([
      credits.consumeCredits(fixture.owner.id, { amount: 60 }),
      credits.consumeCredits(fixture.owner.id, { amount: 60 }),
    ]);
    expect(outcomes.filter((result) => result.status === 'fulfilled')).toHaveLength(1);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(40);
  });

  it('consumes once when a business request is retried', async () => {
    const fixture = await paidSubscription();
    await fixture.webhook.handleEvent(fixture.event());
    await Promise.all([
      credits.consumeCredits(fixture.owner.id, { amount: 20, referenceId: 'job-1' }),
      credits.consumeCredits(fixture.owner.id, { amount: 20, referenceId: 'job-1' }),
    ]);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(80);
    await expect(credits.consumeCredits(fixture.owner.id, { amount: 30, referenceId: 'job-1' })).rejects.toThrow('different credit amount');
  });

  it('rolls back billing and credit writes together, then permits webhook retry', async () => {
    const fixture = await paidSubscription();
    const event = fixture.event();
    const refresh = credits.refreshUserCredits.bind(credits);
    const failure = vi.spyOn(credits, 'refreshUserCredits').mockImplementationOnce(async (...args) => {
      await refresh(...args);
      throw new Error('simulated failure after credit allocation');
    });
    await expect(fixture.webhook.handleEvent(event)).rejects.toThrow('simulated failure');
    expect(await prisma.billingTransaction.count({ where: { subscriptionId: fixture.subscription.id } })).toBe(0);
    expect(await prisma.creditTransaction.count({ where: { creditAccount: { userId: fixture.owner.id } } })).toBe(0);
    failure.mockRestore();
    await fixture.webhook.handleEvent(event);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
  });

  it('accepts invoice.paid before subscription.created and ignores the stale created state', async () => {
    const fixture = await paidSubscription();
    await prisma.subscription.delete({ where: { id: fixture.subscription.id } });
    await fixture.webhook.handleEvent(fixture.event());
    await fixture.webhook.handleEvent({
      id: `evt_${randomUUID()}`, type: 'customer.subscription.created',
      data: { object: { ...fixture.remote, status: 'incomplete' } },
    } as unknown as Stripe.Event);
    const stored = await prisma.subscription.findUniqueOrThrow({ where: { stripeSubscriptionId: fixture.remote.id } });
    expect(stored.status).toBe(SubscriptionStatus.ACTIVE);
    expect((await credits.getBalance(fixture.owner.id)).subscriptionBalance).toBe(100);
  });
});

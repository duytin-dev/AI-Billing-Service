# Credit management

Credit is granted after subscription checkout produces a paid invoice, including
a zero-amount invoice for Free. Registering a user does not grant credits.

## Plans and monthly reset

- Free: create a recurring zero-price Stripe Price and link it through
  `SubscriptionPrice.stripePriceId`. Set `monthlyCredits` to 50. Free receives
  exactly 50 subscription credits after the first `invoice.paid`, and resets to
  50 every month while the subscription is active.
- Pro: credits come from `SubscriptionPrice.monthlyCredits`. Each credit period
  must fall within the paid subscription period. Annual payments authorize
  monthly credit refills for that paid year.
- Dates use the original `Subscription.startedAt` day and time in UTC. A start
  on June 25 resets on July 25. January 31 resets on February's last day and
  then March 31. Calendar months are used, rather than 30-day durations.
- Unused subscription credits do not roll over. Reset writes a negative `RESET`
  transaction, then a positive `SUBSCRIPTION_ALLOCATION` for the new quota.
- Addon credits are not reset. Consumption uses subscription credits first.
- The reset worker runs every minute and on application startup. Balance and
  consumption requests also refresh overdue credits. Downtime skips obsolete
  monthly quotas and grants only the current eligible month's quota.
- Duplicate webhook events and multiple paid invoices for the same credit
  period cannot grant that month's quota twice. Proration invoices do not
  allocate another full monthly quota.

## Stripe webhook events

Configure the webhook endpoint `/api/webhooks/stripe` to receive:

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`

The service fetches the current Stripe subscription for payment and update
events. An invoice can arrive before the subscription-created webhook. Billing,
credit, and the processed webhook marker commit in one database transaction.
Failures return an error so Stripe can retry.

Existing subscriptions created before credit management was enabled need their
latest `invoice.paid` event resent through Stripe to establish the paid period.
The migration does not assume that an existing active subscription was paid.

## API

All credit endpoints require a bearer JWT:

- `GET /api/credits/balance`
- `GET /api/credits/transactions?limit=50` (maximum 100)
- `POST /api/credits/consume`, with `{ "amount": 10, "referenceId": "job-123" }`

Use a stable `referenceId` to retry the same consumption request safely. Reusing
the reference with a different amount returns an error. Transaction balances
include both subscription and addon credit balances.

## Database and checks

Apply the additive migration `20261007050000_credit_management` after the existing
migrations, then regenerate Prisma Client:

```powershell
npx prisma migrate deploy
npx prisma generate
npm run build
npm test
```

Run the PostgreSQL integration tests explicitly:

```powershell
$env:RUN_CREDIT_INTEGRATION_TESTS = '1'
npm test
Remove-Item Env:RUN_CREDIT_INTEGRATION_TESTS
```

Integration tests create a random `credit_test_*` schema in the configured
database, apply migrations to that schema, and remove it afterward. They do not
use or alter the application's tables. Default unit tests do not require a
database connection.

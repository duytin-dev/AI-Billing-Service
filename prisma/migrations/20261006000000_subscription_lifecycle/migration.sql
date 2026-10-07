ALTER TYPE "SubscriptionStatus" ADD VALUE 'TRIALING';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'INCOMPLETE';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'UNPAID';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'PAUSED';

ALTER TABLE "Subscription" ADD COLUMN "cancelAtPeriodEnd" BOOLEAN NOT NULL DEFAULT false;

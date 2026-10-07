ALTER TYPE "CreditTransactionType" ADD VALUE 'RESET';

ALTER TABLE "Subscription" ADD COLUMN "creditPaidThroughAt" TIMESTAMP(3);
ALTER TABLE "CreditAccount"
  ADD COLUMN "subscriptionId" TEXT,
  ADD COLUMN "subscriptionCreditExpiresAt" TIMESTAMP(3);
ALTER TABLE "CreditTransaction" ADD COLUMN "idempotencyKey" TEXT;

-- Preserve the expiry of existing subscription balances.
UPDATE "CreditAccount" AS account
SET "subscriptionId" = subscription."id",
    "subscriptionCreditExpiresAt" = subscription."nextCreditRefillAt"
FROM (
  SELECT DISTINCT ON ("userId") "id", "userId", "nextCreditRefillAt"
  FROM "Subscription"
  WHERE "status" = 'ACTIVE'
  ORDER BY "userId", "startedAt" DESC, "id"
) AS subscription
WHERE subscription."userId" = account."userId";

CREATE UNIQUE INDEX "CreditAccount_subscriptionId_key" ON "CreditAccount"("subscriptionId");
CREATE INDEX "CreditAccount_subscriptionCreditExpiresAt_idx" ON "CreditAccount"("subscriptionCreditExpiresAt");
CREATE UNIQUE INDEX "CreditTransaction_idempotencyKey_key" ON "CreditTransaction"("idempotencyKey");
ALTER TABLE "CreditAccount" ADD CONSTRAINT "CreditAccount_subscriptionId_fkey"
  FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;

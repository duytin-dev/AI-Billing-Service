/*
  Warnings:

  - You are about to drop the column `balance` on the `CreditAccount` table. All the data in the column will be lost.
  - You are about to drop the column `credits` on the `SubscriptionPrice` table. All the data in the column will be lost.
  - Added the required column `nextCreditRefillAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyCredits` to the `SubscriptionPrice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CreditSource" AS ENUM ('SUBSCRIPTION', 'ADDON');

-- AlterTable
ALTER TABLE "CreditAccount" DROP COLUMN "balance",
ADD COLUMN     "addonBalance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "subscriptionBalance" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "CreditTransaction" ADD COLUMN     "creditAllocationId" TEXT;

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "nextCreditRefillAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SubscriptionPrice" DROP COLUMN "credits",
ADD COLUMN     "monthlyCredits" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CreditAllocation" (
    "id" TEXT NOT NULL,
    "creditAccountId" TEXT NOT NULL,
    "source" "CreditSource" NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "remainingAmount" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "subscriptionId" TEXT,
    "addonPurchaseId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditAllocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreditAllocation_creditAccountId_idx" ON "CreditAllocation"("creditAccountId");

-- CreateIndex
CREATE INDEX "CreditAllocation_subscriptionId_idx" ON "CreditAllocation"("subscriptionId");

-- CreateIndex
CREATE INDEX "CreditAllocation_addonPurchaseId_idx" ON "CreditAllocation"("addonPurchaseId");

-- CreateIndex
CREATE INDEX "CreditAllocation_expiresAt_idx" ON "CreditAllocation"("expiresAt");

-- CreateIndex
CREATE INDEX "CreditTransaction_creditAllocationId_idx" ON "CreditTransaction"("creditAllocationId");

-- AddForeignKey
ALTER TABLE "CreditAllocation" ADD CONSTRAINT "CreditAllocation_creditAccountId_fkey" FOREIGN KEY ("creditAccountId") REFERENCES "CreditAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditAllocation" ADD CONSTRAINT "CreditAllocation_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditAllocation" ADD CONSTRAINT "CreditAllocation_addonPurchaseId_fkey" FOREIGN KEY ("addonPurchaseId") REFERENCES "AddonPurchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_creditAllocationId_fkey" FOREIGN KEY ("creditAllocationId") REFERENCES "CreditAllocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

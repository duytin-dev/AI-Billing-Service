/*
  Warnings:

  - You are about to drop the column `creditAllocationId` on the `CreditTransaction` table. All the data in the column will be lost.
  - You are about to drop the `CreditAllocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreditAllocation" DROP CONSTRAINT "CreditAllocation_addonPurchaseId_fkey";

-- DropForeignKey
ALTER TABLE "CreditAllocation" DROP CONSTRAINT "CreditAllocation_creditAccountId_fkey";

-- DropForeignKey
ALTER TABLE "CreditAllocation" DROP CONSTRAINT "CreditAllocation_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "CreditTransaction" DROP CONSTRAINT "CreditTransaction_creditAllocationId_fkey";

-- DropIndex
DROP INDEX "CreditTransaction_creditAllocationId_idx";

-- AlterTable
ALTER TABLE "CreditTransaction" DROP COLUMN "creditAllocationId";

-- DropTable
DROP TABLE "CreditAllocation";

-- DropEnum
DROP TYPE "CreditSource";

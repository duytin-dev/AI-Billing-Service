/*
  Warnings:

  - The values [REFUND] on the enum `BillingTransactionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userId` on the `CreditTransaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BillingTransactionType_new" AS ENUM ('SUBSCRIPTION_PAYMENT', 'ADDON_PAYMENT');
ALTER TABLE "BillingTransaction" ALTER COLUMN "type" TYPE "BillingTransactionType_new" USING ("type"::text::"BillingTransactionType_new");
ALTER TYPE "BillingTransactionType" RENAME TO "BillingTransactionType_old";
ALTER TYPE "BillingTransactionType_new" RENAME TO "BillingTransactionType";
DROP TYPE "public"."BillingTransactionType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "CreditTransaction" DROP CONSTRAINT "CreditTransaction_userId_fkey";

-- DropIndex
DROP INDEX "CreditTransaction_userId_idx";

-- AlterTable
ALTER TABLE "BillingTransaction" ADD COLUMN     "addonPurchaseId" TEXT;

-- AlterTable
ALTER TABLE "CreditTransaction" DROP COLUMN "userId",
ADD COLUMN     "addonPurchaseId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_addonPurchaseId_fkey" FOREIGN KEY ("addonPurchaseId") REFERENCES "AddonPurchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingTransaction" ADD CONSTRAINT "BillingTransaction_addonPurchaseId_fkey" FOREIGN KEY ("addonPurchaseId") REFERENCES "AddonPurchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

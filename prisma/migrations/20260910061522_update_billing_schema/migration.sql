/*
  Warnings:

  - You are about to drop the column `addonId` on the `AddonPurchase` table. All the data in the column will be lost.
  - Added the required column `creditAddonId` to the `AddonPurchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AddonPurchase" DROP CONSTRAINT "AddonPurchase_addonId_fkey";

-- DropIndex
DROP INDEX "AddonPurchase_addonId_idx";

-- AlterTable
ALTER TABLE "AddonPurchase" DROP COLUMN "addonId",
ADD COLUMN     "creditAddonId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "AddonPurchase_creditAddonId_idx" ON "AddonPurchase"("creditAddonId");

-- AddForeignKey
ALTER TABLE "AddonPurchase" ADD CONSTRAINT "AddonPurchase_creditAddonId_fkey" FOREIGN KEY ("creditAddonId") REFERENCES "CreditAddon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

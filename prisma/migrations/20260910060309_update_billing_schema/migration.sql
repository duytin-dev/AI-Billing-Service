-- DropIndex
DROP INDEX "User_name_key";

-- AlterTable
ALTER TABLE "SubscriptionPrice" ALTER COLUMN "stripePriceId" DROP NOT NULL;

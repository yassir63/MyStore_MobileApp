-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_id_user_fkey";

-- AlterTable
ALTER TABLE "Produit" DROP COLUMN "id_user";


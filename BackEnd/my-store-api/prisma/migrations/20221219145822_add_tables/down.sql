-- DropForeignKey
ALTER TABLE "achat_credit" DROP CONSTRAINT "achat_credit_id_achat_fkey";

-- DropForeignKey
ALTER TABLE "produits_achetes" DROP CONSTRAINT "produits_achetes_id_achat_fkey";

-- DropForeignKey
ALTER TABLE "produits_achetes" DROP CONSTRAINT "produits_achetes_id_produit_fkey";

-- DropTable
DROP TABLE "Produit";

-- DropTable
DROP TABLE "Achat";

-- DropTable
DROP TABLE "achat_credit";

-- DropTable
DROP TABLE "produits_achetes";

-- DropTable
DROP TABLE "charges";


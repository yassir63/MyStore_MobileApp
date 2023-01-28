-- CreateTable
CREATE TABLE "Produit" (
    "id_produit" SERIAL NOT NULL,
    "nom" VARCHAR(256) NOT NULL,
    "marque" VARCHAR(256) NOT NULL,
    "categorie" VARCHAR(256) NOT NULL,
    "Prix_vente" DOUBLE PRECISION NOT NULL,
    "Prix_achat" DOUBLE PRECISION NOT NULL,
    "date_expiration" TIMESTAMP(3) NOT NULL,
    "quantite" INTEGER NOT NULL,
    "libelle" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id_produit")
);

-- CreateTable
CREATE TABLE "Achat" (
    "id_achat" SERIAL NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_achat" TIMESTAMP(3) NOT NULL,
    "paiement" BOOLEAN NOT NULL,

    CONSTRAINT "Achat_pkey" PRIMARY KEY ("id_achat")
);

-- CreateTable
CREATE TABLE "achat_credit" (
    "id_achat" INTEGER NOT NULL,
    "nom_crediteur" VARCHAR(256) NOT NULL,
    "Date_limite" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "produits_achetes" (
    "id_achat" INTEGER NOT NULL,
    "id_produit" INTEGER NOT NULL,

    CONSTRAINT "produits_achetes_pkey" PRIMARY KEY ("id_achat","id_produit")
);

-- CreateTable
CREATE TABLE "charges" (
    "id_charge" SERIAL NOT NULL,
    "categorie" VARCHAR(256) NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "charges_pkey" PRIMARY KEY ("id_charge")
);

-- CreateIndex
CREATE UNIQUE INDEX "achat_credit_id_achat_key" ON "achat_credit"("id_achat");

-- AddForeignKey
ALTER TABLE "achat_credit" ADD CONSTRAINT "achat_credit_id_achat_fkey" FOREIGN KEY ("id_achat") REFERENCES "Achat"("id_achat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produits_achetes" ADD CONSTRAINT "produits_achetes_id_achat_fkey" FOREIGN KEY ("id_achat") REFERENCES "Achat"("id_achat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produits_achetes" ADD CONSTRAINT "produits_achetes_id_produit_fkey" FOREIGN KEY ("id_produit") REFERENCES "Produit"("id_produit") ON DELETE RESTRICT ON UPDATE CASCADE;

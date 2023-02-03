/*
  Warnings:

  - You are about to drop the column `categorie` on the `charges` table. All the data in the column will be lost.
  - Added the required column `creditor` to the `charges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_limite` to the `charges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "charges" DROP COLUMN "categorie",
ADD COLUMN     "creditor" VARCHAR(256) NOT NULL,
ADD COLUMN     "date_limite" TIMESTAMP(3) NOT NULL;

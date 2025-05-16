/*
  Warnings:

  - You are about to drop the column `curso_id` on the `permissao` table. All the data in the column will be lost.
  - Added the required column `permissao_id` to the `permissao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `permissao` DROP COLUMN `curso_id`,
    ADD COLUMN `permissao_id` INTEGER NOT NULL;

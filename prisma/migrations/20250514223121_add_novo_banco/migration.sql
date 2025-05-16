/*
  Warnings:

  - You are about to drop the column `dia_semana` on the `turma` table. All the data in the column will be lost.
  - You are about to drop the column `materia` on the `turma` table. All the data in the column will be lost.
  - You are about to drop the column `professor_id` on the `turma` table. All the data in the column will be lost.
  - You are about to drop the `turma_aluno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `turma` DROP FOREIGN KEY `fk_turma_professor`;

-- DropForeignKey
ALTER TABLE `turma_aluno` DROP FOREIGN KEY `fk_turma_aluno_aluno`;

-- DropForeignKey
ALTER TABLE `turma_aluno` DROP FOREIGN KEY `fk_turma_aluno_turma`;

-- DropIndex
DROP INDEX `fk_turma_professor` ON `turma`;

-- AlterTable
ALTER TABLE `turma` DROP COLUMN `dia_semana`,
    DROP COLUMN `materia`,
    DROP COLUMN `professor_id`;

-- DropTable
DROP TABLE `turma_aluno`;

-- CreateTable
CREATE TABLE `disciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `dia_semana` VARCHAR(255) NOT NULL,
    `curso_id` INTEGER NOT NULL,
    `professor_id` INTEGER NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_disciplina_curso`(`curso_id`),
    INDEX `fk_disciplina_professor`(`professor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplina_aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aluno_id` INTEGER NOT NULL,
    `disciplina_id` INTEGER NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_disciplina_aluno_aluno`(`aluno_id`),
    INDEX `fk_disciplina_aluno_curso`(`disciplina_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `disciplina` ADD CONSTRAINT `fk_disciplina_curso` FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciplina` ADD CONSTRAINT `fk_disciplina_professor` FOREIGN KEY (`professor_id`) REFERENCES `professor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciplina_aluno` ADD CONSTRAINT `fk_disciplina_aluno_aluno` FOREIGN KEY (`aluno_id`) REFERENCES `aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciplina_aluno` ADD CONSTRAINT `fk_disciplina_aluno_disciplina` FOREIGN KEY (`disciplina_id`) REFERENCES `disciplina`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

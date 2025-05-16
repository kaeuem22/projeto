-- CreateTable
CREATE TABLE `turma_aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aluno_id` INTEGER NOT NULL,
    `turma_id` INTEGER NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_turma_aluno_aluno`(`aluno_id`),
    INDEX `fk_turma_aluno_turma`(`turma_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `turma_aluno` ADD CONSTRAINT `fk_turma_aluno_aluno` FOREIGN KEY (`aluno_id`) REFERENCES `aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turma_aluno` ADD CONSTRAINT `fk_turma_aluno_turma` FOREIGN KEY (`turma_id`) REFERENCES `turma`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

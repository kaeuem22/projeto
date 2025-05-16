-- CreateIndex
CREATE INDEX `fk_curso_universidade` ON `curso`(`universidade_id`);

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `fk_curso_universidade` FOREIGN KEY (`universidade_id`) REFERENCES `universidade`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

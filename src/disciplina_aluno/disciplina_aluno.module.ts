import { Module } from '@nestjs/common';
import { DisciplinaAlunoService } from './disciplina_aluno.service';
import { DisciplinaAlunoController } from './disciplina_aluno.controller';

@Module({
  controllers: [DisciplinaAlunoController],
  providers: [DisciplinaAlunoService],
})
export class DisciplinaAlunoModule {}

import { Module } from '@nestjs/common';
import { DisciplinaAlunoService } from './disciplina_aluno.service';
import { DisciplinaAlunoController } from './disciplina_aluno.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DisciplinaAlunoController],
  providers: [DisciplinaAlunoService],
})
export class DisciplinaAlunoModule {}

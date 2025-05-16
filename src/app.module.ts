import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { DisciplinaAlunoModule } from './disciplina_aluno/disciplina_aluno.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';
import { UniversidadeModule } from './universidade/universidade.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
     AuthModule,
     AlunoModule,
     CursoModule,
     DisciplinaModule, 
     DisciplinaAlunoModule, 
     EnderecoModule, 
     ProfessorModule, 
     TurmaModule, 
     UniversidadeModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

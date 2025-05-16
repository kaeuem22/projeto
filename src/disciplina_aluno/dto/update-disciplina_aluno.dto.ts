import { PartialType } from '@nestjs/mapped-types';
import { CreateDisciplinaAlunoDto } from './create-disciplina_aluno.dto';

export class UpdateDisciplinaAlunoDto extends PartialType(CreateDisciplinaAlunoDto) {}

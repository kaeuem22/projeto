import {IsNotEmpty} from 'class-validator';

export class CreateDisciplinaAlunoDto {

    @IsNotEmpty()
    aluno_id: number;

    @IsNotEmpty()
    disciplina_id: number;
}

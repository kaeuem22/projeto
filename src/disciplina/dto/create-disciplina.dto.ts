import {IsNotEmpty, Length  } from 'class-validator';

export class CreateDisciplinaDto {

    @IsNotEmpty()
    @Length(2,255)
    nome: string;

    @IsNotEmpty()
    @Length(2,255)
    dia_semana: string;

    @IsNotEmpty()
    curso_id: number;

    @IsNotEmpty()
    professor_id: number;
}
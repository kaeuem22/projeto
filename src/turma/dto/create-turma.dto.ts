import {IsNotEmpty, Length  } from 'class-validator';

export class CreateTurmaDto {

    @IsNotEmpty()
    @Length(2,255)
    nome: string;

    @IsNotEmpty()
    curso_id: number;
}
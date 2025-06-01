
import {IsNotEmpty, Length  } from 'class-validator';

export class CreateCursoDto {

    @IsNotEmpty()
    @Length(2,255)
    nome: string;

    @IsNotEmpty()
    universidade_id: number;
}

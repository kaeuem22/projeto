import { IsNotEmpty } from "class-validator";

export class CreateAlunoDto {
    @IsNotEmpty()
    usuario_id: number;
}

import { IsNotEmpty } from "class-validator";

export class CreateProfessorDto {
    @IsNotEmpty()
    usuario_id: number;
}

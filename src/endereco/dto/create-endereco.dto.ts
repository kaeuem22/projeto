import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEnderecoDto {
    @IsNotEmpty()
    @IsString()
    cep: string;
  
    @IsNotEmpty()
    @IsString()
    numero: string;
  
    @IsOptional()
    @IsString()
    complemento?: string;
  }
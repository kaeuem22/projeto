import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunoService {
constructor(private readonly prisma: PrismaService){}

async create(createAlunoDto: CreateAlunoDto) {
  return await this.prisma.aluno.create({
    data: createAlunoDto, 
  });
}

async findAll() {
  return this.prisma.aluno.findMany(); 
}

async findOne(id: number) {
  return this.prisma.aluno.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, UpdateAlunoDto: UpdateAlunoDto) {
  return this.prisma.aluno.update({
    where: { id }, // Encontra o usuário pelo ID
    data: UpdateAlunoDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.aluno.delete({
    where: { id }, // Remove pelo ID
  });
}
}
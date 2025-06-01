import { Injectable } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DisciplinaService {
constructor(private readonly prisma: PrismaService){}

  async create(createDisciplinaDto: CreateDisciplinaDto) {
     return await this.prisma.disciplina.create({
    data: createDisciplinaDto, 
  });
  }

async findAll() {
  return this.prisma.disciplina.findMany(); 
}

async findOne(id: number) {
  return this.prisma.disciplina.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
  return this.prisma.disciplina.update({
    where: { id }, // Encontra o usuário pelo ID
    data: updateDisciplinaDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.disciplina.delete({
    where: { id }, // Remove pelo ID
  });
}
}

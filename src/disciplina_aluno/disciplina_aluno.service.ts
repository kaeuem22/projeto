import { Injectable } from '@nestjs/common';
import { CreateDisciplinaAlunoDto } from './dto/create-disciplina_aluno.dto';
import { UpdateDisciplinaAlunoDto } from './dto/update-disciplina_aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DisciplinaAlunoService {
constructor(private readonly prisma: PrismaService){}

  async create(createDisciplinaAlunoDto: CreateDisciplinaAlunoDto) {
     return await this.prisma.disciplina_aluno.create({
    data: createDisciplinaAlunoDto, 
  });
  }

async findAll() {
  return this.prisma.disciplina_aluno.findMany(); 
}

async findOne(id: number) {
  return this.prisma.disciplina_aluno.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, updateDisciplinaAlunoDto: UpdateDisciplinaAlunoDto) {
  return this.prisma.disciplina_aluno.update({
    where: { id }, // Encontra o usuário pelo ID
    data: updateDisciplinaAlunoDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.disciplina_aluno.delete({
    where: { id }, // Remove pelo ID
  });
}
}

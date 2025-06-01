import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TurmaService {
constructor(private readonly prisma: PrismaService){}

  async create(createTurmaDto: CreateTurmaDto) {
     return await this.prisma.turma.create({
    data: createTurmaDto, 
  });
  }

async findAll() {
  return this.prisma.turma.findMany(); 
}

async findOne(id: number) {
  return this.prisma.turma.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, updateTurmaDto: UpdateTurmaDto) {
  return this.prisma.turma.update({
    where: { id }, // Encontra o usuário pelo ID
    data: updateTurmaDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.turma.delete({
    where: { id }, // Remove pelo ID
  });
}
}

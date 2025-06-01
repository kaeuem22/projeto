import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessorService {
constructor(private readonly prisma: PrismaService){}

async create(createProfessorDto: CreateProfessorDto) {
  return await this.prisma.professor.create({
    data: createProfessorDto, 
  });
}

async findAll() {
  return this.prisma.professor.findMany(); 
}

async findOne(id: number) {
  return this.prisma.professor.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async update(id: number, UpdateProfessorDto: UpdateProfessorDto) {
  return this.prisma.professor.update({
    where: { id }, // Encontra o usuário pelo ID
    data: UpdateProfessorDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.professor.delete({
    where: { id }, // Remove pelo ID
  });
}
}

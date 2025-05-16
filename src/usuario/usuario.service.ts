import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
constructor(private readonly prisma: PrismaService){}

async create(createUsuarioDto: CreateUsuarioDto) {
  return await this.prisma.usuario.create({
    data: createUsuarioDto, 
  });
}

async findAll() {
  return this.prisma.usuario.findMany(); 
}

async findOne(id: number) {
  return this.prisma.usuario.findUnique({
    where: { id }, // Busca pelo ID
  });
}

async findByEmail(email: string) {
  return this.prisma.usuario.findFirst({
    where: { email }, // Busca pelo ID
  });
}

async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  return this.prisma.usuario.update({
    where: { id }, // Encontra o usuário pelo ID
    data: updateUsuarioDto, // Atualiza com os novos dados
  });
}

async remove(id: number) {
  return this.prisma.usuario.delete({
    where: { id }, // Remove pelo ID
  });
}
}

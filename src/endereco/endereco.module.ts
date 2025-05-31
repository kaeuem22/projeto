import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [HttpModule], // Somente módulos aqui
  controllers: [EnderecoController],
  providers: [EnderecoService, PrismaService], // PrismaService vai aqui
})
export class EnderecoModule {}
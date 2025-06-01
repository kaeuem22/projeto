import { Module } from '@nestjs/common';
import { UniversidadeService } from './universidade.service';
import { UniversidadeController } from './universidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UniversidadeController],
  providers: [UniversidadeService],
})
export class UniversidadeModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { PermissionsGuard } from './permissions.guard';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [
    AuthService,
    UsuarioService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // Aplica autenticação globalmente
    },
    // O PermissionsGuard **não** é global — é aplicado por rota com @UseGuards
    PermissionsGuard,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

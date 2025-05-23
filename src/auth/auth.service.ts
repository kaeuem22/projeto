
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService
  ) {}

  // async signIn(
  //   email: string,
  //   pass: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.usersService.findByEmail(email);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { sub: user.id, username: user.email };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
  const user = await this.usersService.findByEmailWithPermissions(email);

  if (!user || user.password !== pass) {
    throw new UnauthorizedException();
  }

  const permissions = user.usuario_permissao.map(
    (up) => up.permissao.nome // ajustar se o campo for diferente
  );

  const payload = {
    sub: user.id,
    username: user.email,
    permissions,  // array de strings com as permissões do usuário
  };

  return {
    access_token: await this.jwtService.signAsync(payload),
  };
}

}

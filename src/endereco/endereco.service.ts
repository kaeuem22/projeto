import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EnderecoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    const cep = createEnderecoDto.cep.replace(/\D/g, '');
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://brasilapi.com.br/api/cep/v1/${cep}`),
      );
      const data = response.data;

      return await this.prisma.endereco.create({
        data: {
          cep: data.cep,
          cidade: data.city,
          logradouro: data.street,
          bairro: data.neighborhood,
          numero: createEnderecoDto.numero,
          complemento: createEnderecoDto.complemento ?? '',
        },
      });
    } catch (error) {
      throw new HttpException(
        'CEP inválido ou erro ao buscar na BrasilAPI',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return this.prisma.endereco.findMany();
  }

  async findOne(id: number) {
    return this.prisma.endereco.findUnique({ where: { id } });
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.prisma.endereco.update({
      where: { id },
      data: updateEnderecoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.endereco.delete({ where: { id } });
  }
}

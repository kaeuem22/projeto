import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PermissionsGuard, Permissions } from 'src/auth/permissions.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('endereco')
@UseGuards(AuthGuard, PermissionsGuard) // ambos guards ativos
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  @Permissions('C_endereco') // permissão create endereco
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @Get()
  @Permissions('R_endereco') // permissão read endereco
  findAll() {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecoService.remove(+id);
  }
}
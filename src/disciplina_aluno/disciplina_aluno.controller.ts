import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisciplinaAlunoService } from './disciplina_aluno.service';
import { CreateDisciplinaAlunoDto } from './dto/create-disciplina_aluno.dto';
import { UpdateDisciplinaAlunoDto } from './dto/update-disciplina_aluno.dto';

@Controller('disciplina-aluno')
export class DisciplinaAlunoController {
  constructor(private readonly disciplinaAlunoService: DisciplinaAlunoService) {}

  @Post()
  create(@Body() createDisciplinaAlunoDto: CreateDisciplinaAlunoDto) {
    return this.disciplinaAlunoService.create(createDisciplinaAlunoDto);
  }

  @Get()
  findAll() {
    return this.disciplinaAlunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplinaAlunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisciplinaAlunoDto: UpdateDisciplinaAlunoDto) {
    return this.disciplinaAlunoService.update(+id, updateDisciplinaAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinaAlunoService.remove(+id);
  }
}

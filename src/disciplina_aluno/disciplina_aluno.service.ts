import { Injectable } from '@nestjs/common';
import { CreateDisciplinaAlunoDto } from './dto/create-disciplina_aluno.dto';
import { UpdateDisciplinaAlunoDto } from './dto/update-disciplina_aluno.dto';

@Injectable()
export class DisciplinaAlunoService {
  create(createDisciplinaAlunoDto: CreateDisciplinaAlunoDto) {
    return 'This action adds a new disciplinaAluno';
  }

  findAll() {
    return `This action returns all disciplinaAluno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disciplinaAluno`;
  }

  update(id: number, updateDisciplinaAlunoDto: UpdateDisciplinaAlunoDto) {
    return `This action updates a #${id} disciplinaAluno`;
  }

  remove(id: number) {
    return `This action removes a #${id} disciplinaAluno`;
  }
}

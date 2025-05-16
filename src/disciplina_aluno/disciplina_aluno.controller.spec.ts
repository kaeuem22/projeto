import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaAlunoController } from './disciplina_aluno.controller';
import { DisciplinaAlunoService } from './disciplina_aluno.service';

describe('DisciplinaAlunoController', () => {
  let controller: DisciplinaAlunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplinaAlunoController],
      providers: [DisciplinaAlunoService],
    }).compile();

    controller = module.get<DisciplinaAlunoController>(DisciplinaAlunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

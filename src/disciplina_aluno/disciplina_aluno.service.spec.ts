import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaAlunoService } from './disciplina_aluno.service';

describe('DisciplinaAlunoService', () => {
  let service: DisciplinaAlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinaAlunoService],
    }).compile();

    service = module.get<DisciplinaAlunoService>(DisciplinaAlunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

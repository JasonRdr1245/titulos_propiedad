import { Test, TestingModule } from '@nestjs/testing';
import { EncargadoService } from './encargado.service';

describe('EncargadoService', () => {
  let service: EncargadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncargadoService],
    }).compile();

    service = module.get<EncargadoService>(EncargadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PersonaJuridicaService } from './persona-juridica.service';

describe('PersonaJuridicaService', () => {
  let service: PersonaJuridicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaJuridicaService],
    }).compile();

    service = module.get<PersonaJuridicaService>(PersonaJuridicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

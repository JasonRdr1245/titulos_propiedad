import { Test, TestingModule } from '@nestjs/testing';
import { PersonaJuridicaController } from './persona-juridica.controller';
import { PersonaJuridicaService } from './persona-juridica.service';

describe('PersonaJuridicaController', () => {
  let controller: PersonaJuridicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaJuridicaController],
      providers: [PersonaJuridicaService],
    }).compile();

    controller = module.get<PersonaJuridicaController>(PersonaJuridicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

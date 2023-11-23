import { Test, TestingModule } from '@nestjs/testing';
import { EncargadoController } from './encargado.controller';
import { EncargadoService } from './encargado.service';

describe('EncargadoController', () => {
  let controller: EncargadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncargadoController],
      providers: [EncargadoService],
    }).compile();

    controller = module.get<EncargadoController>(EncargadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

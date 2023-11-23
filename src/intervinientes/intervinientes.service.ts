import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateIntervinienteDto } from './dto/create-interviniente.dto';
import { UpdateIntervinienteDto } from './dto/update-interviniente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Interviniente } from './entities/interviniente.entity';
import { Repository } from 'typeorm';
import { TituloPropiedadService } from 'src/titulo-propiedad/titulo-propiedad.service';

@Injectable()
export class IntervinientesService {
  constructor(
    @InjectRepository(Interviniente)
    private intervinienteRepository:Repository<Interviniente>,
    private tituloPropiedadService: TituloPropiedadService,
  ){}
  async create(idTitulo:string,createIntervinienteDto: CreateIntervinienteDto) {
    try {
      const titulo = await this.tituloPropiedadService.findOne(idTitulo);
      const interviniente = await this.intervinienteRepository.save(createIntervinienteDto);
      titulo.intervinientes.push(interviniente);
      return await this.tituloPropiedadService.guardar(titulo);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all intervinientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interviniente`;
  }

  update(id: number, updateIntervinienteDto: UpdateIntervinienteDto) {
    return `This action updates a #${id} interviniente`;
  }

  remove(id: number) {
    return `This action removes a #${id} interviniente`;
  }
}

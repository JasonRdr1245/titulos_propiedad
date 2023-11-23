import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Repository } from 'typeorm';
import { TituloPropiedadService } from 'src/titulo-propiedad/titulo-propiedad.service';

@Injectable()
export class EncargadoService {
  constructor(
    @InjectRepository(Encargado)
    private encargadoRepository:Repository<Encargado>,
    private tituloPropiedadService: TituloPropiedadService,
  ){

  }
async  create(idTitulo:string,createEncargadoDto: CreateEncargadoDto) {
    try {
      const titulo = await this.tituloPropiedadService.findOne(idTitulo);
      const encargado = await this.encargadoRepository.save(createEncargadoDto);
      titulo.encargado=encargado;
      return await this.tituloPropiedadService.guardar(titulo);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all encargado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encargado`;
  }

  update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    return `This action updates a #${id} encargado`;
  }

  remove(id: number) {
    return `This action removes a #${id} encargado`;
  }
}

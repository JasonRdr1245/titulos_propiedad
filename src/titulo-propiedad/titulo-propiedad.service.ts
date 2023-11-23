import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTituloPropiedadDto } from './dto/create-titulo-propiedad.dto';
import { UpdateTituloPropiedadDto } from './dto/update-titulo-propiedad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TituloPropiedad } from './entities/titulo-propiedad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TituloPropiedadService {
  constructor(
    @InjectRepository(TituloPropiedad)
    private tituloPropiedadRepository: Repository<TituloPropiedad>,
  ) {}
  async create(createTituloPropiedadDto: CreateTituloPropiedadDto) {
    try {
      return await this.tituloPropiedadRepository.save(
        createTituloPropiedadDto,
      );
    } catch (error) {
      throw new InternalServerErrorException('Algo salio terriblemente mal');
    }
  }

  async findAll() {
    return await this.tituloPropiedadRepository.find({
      relations:{
        antecedente:true,
        cliente:true,
        persona_juridica:true,
        intervinientes:true,
        encargado:true
      }
    });
  }

  async findOne(id: string) {
    return await this.tituloPropiedadRepository.findOne({
      relations:{
        antecedente:true,
        cliente:true,
        persona_juridica:true,
        intervinientes:true,
        encargado:true
      },
      where:{
        num_solicitud:id
      }
    });
  }

  update(id: number, updateTituloPropiedadDto: UpdateTituloPropiedadDto) {
    return `This action updates a #${id} tituloPropiedad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tituloPropiedad`;
  }
  async guardar(titulo:TituloPropiedad){
    try{
      return await this.tituloPropiedadRepository.save(titulo)
    }catch(error){
      throw new InternalServerErrorException()
    }
  }
}

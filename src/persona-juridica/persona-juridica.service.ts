import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePersonaJuridicaDto } from './dto/create-persona-juridica.dto';
import { UpdatePersonaJuridicaDto } from './dto/update-persona-juridica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonaJuridica } from './entities/persona-juridica.entity';
import { Repository } from 'typeorm';
import { TituloPropiedadService } from 'src/titulo-propiedad/titulo-propiedad.service';

@Injectable()
export class PersonaJuridicaService {
  constructor(
    @InjectRepository(PersonaJuridica)
    private personaJuridicaRepository: Repository<PersonaJuridica>,
    private tituloPropiedadService:TituloPropiedadService,
  ) {}
  async create(idTitulo,createPersonaJuridicaDto: CreatePersonaJuridicaDto) {
    try {
      const titulo = await this.tituloPropiedadService.findOne(idTitulo);
      const personaJuridica = await this.personaJuridicaRepository.save(createPersonaJuridicaDto);
      titulo.persona_juridica = personaJuridica;
      return await this.tituloPropiedadService.guardar(titulo);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all personaJuridica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaJuridica`;
  }

  update(id: number, updatePersonaJuridicaDto: UpdatePersonaJuridicaDto) {
    return `This action updates a #${id} personaJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaJuridica`;
  }
}

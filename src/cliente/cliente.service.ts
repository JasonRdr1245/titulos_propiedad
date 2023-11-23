import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { TituloPropiedadService } from 'src/titulo-propiedad/titulo-propiedad.service';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    private tituloPropiedadService: TituloPropiedadService,
  ) {}
  async create(idTitulo: string, createClienteDto: CreateClienteDto) {
    try {
      const titulo = await this.tituloPropiedadService.findOne(idTitulo);
      const cliente = await this.clienteRepository.save(createClienteDto);
      titulo.cliente = cliente;
      return await this.tituloPropiedadService.guardar(titulo);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all cliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}

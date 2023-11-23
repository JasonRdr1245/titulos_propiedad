import { Module } from '@nestjs/common';
import { PersonaJuridicaService } from './persona-juridica.service';
import { PersonaJuridicaController } from './persona-juridica.controller';
import { TituloPropiedadModule } from 'src/titulo-propiedad/titulo-propiedad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaJuridica } from './entities/persona-juridica.entity';

@Module({
  imports:[
    TituloPropiedadModule,
    TypeOrmModule.forFeature([PersonaJuridica])
  ],
  controllers: [PersonaJuridicaController],
  providers: [PersonaJuridicaService],
})
export class PersonaJuridicaModule {}

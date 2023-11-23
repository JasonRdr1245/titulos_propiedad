import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaJuridicaModule } from './persona-juridica/persona-juridica.module';
import { AntecedentesModule } from './antecedentes/antecedentes.module';
import { ClienteModule } from './cliente/cliente.module';
import { TituloPropiedadModule } from './titulo-propiedad/titulo-propiedad.module';
import { EncargadoModule } from './encargado/encargado.module';
import { IntervinientesModule } from './intervinientes/intervinientes.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        
        envFilePath:'.env'
      }
    ),
    TypeOrmModule.forRoot(
      {
        type:'mysql',
        host:'localhost',
        port:3306,
        username:'my_user',
        password:'my_password',
        database:'my_database',
        entities:[__dirname+'/**/*.entity{.ts,.js}'],
        synchronize:true
      }
    ),
    PersonaJuridicaModule,
    AntecedentesModule,
    ClienteModule,
    TituloPropiedadModule,
    EncargadoModule,
    IntervinientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TituloPropiedad } from 'src/titulo-propiedad/entities/titulo-propiedad.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryColumn({
    type: 'char',
    length: 11,
  })
  cli_doc: string;
  @Column({ type: 'varchar', length: 20 })
  nombres: string;
  @Column({ type: 'varchar', length: 20 })
  ape_paterno: string;
  @Column({ type: 'varchar', length: 20 })
  ape_materno: string;
  @Column({ type: 'varchar', length: 250 })
  domicilio: string;
  @Column({ type: 'varchar', length: 50 })
  correo: string;
  @OneToMany(
    () => TituloPropiedad,
    (tituloPropiedad) => tituloPropiedad.cliente,
  )
  titulosPropiedades: TituloPropiedad[];
}

import { TituloPropiedad } from 'src/titulo-propiedad/entities/titulo-propiedad.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'antecedentes' })
export class Antecedente {
  @PrimaryColumn({
    type: 'char',
    length: 8,
  })
  num_antecedente: string;
  @Column({
    type: 'varchar',
    length: 25,
  })
  tipo_antecedente: string;
  @OneToMany(
    () => TituloPropiedad,
    (tituloPropiedad) => tituloPropiedad.antecedente,
  )
  titulosPropiedades: TituloPropiedad[];
}

import { TituloPropiedad } from "src/titulo-propiedad/entities/titulo-propiedad.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'encargado'})
export class Encargado {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({
        type:'varchar',
        length:50
    })
    nombre_encargado:string;
    @Column({
        type:'datetime',default: ()=>'CURRENT_TIMESTAMP'
    })
    fecha:  string;
    @OneToOne(()=>TituloPropiedad,(tituloPropiedad)=>tituloPropiedad.encargado)
    @JoinColumn()
    tituloPropiedad:TituloPropiedad;
}

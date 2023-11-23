import { TituloPropiedad } from "src/titulo-propiedad/entities/titulo-propiedad.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'interviniente'})
export class Interviniente {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column({
        type:'char',
        length:50
    })
    name:string;
    @ManyToOne(()=>TituloPropiedad,(tituloPropiedad)=>tituloPropiedad.intervinientes)
    tituloPropiedad:TituloPropiedad;
}


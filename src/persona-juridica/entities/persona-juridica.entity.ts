import { TituloPropiedad } from "src/titulo-propiedad/entities/titulo-propiedad.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'persona_juridica'})
export class PersonaJuridica {
    @PrimaryColumn({
        type:'char',
        length:11,
        unique:true
    })
    ruc_representante:string;
    @Column({
        type:"varchar",
        length:20,
    })
    nom_pj:string;
    @Column({
        type:'char',
        length:10
    })
    sector:string;
    @OneToMany(()=>TituloPropiedad,(tituloPropiedad)=>tituloPropiedad.persona_juridica)
    titulosPropiedades:TituloPropiedad[] 
}

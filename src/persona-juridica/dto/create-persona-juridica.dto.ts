import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonaJuridicaDto {
    @IsNotEmpty()
    @IsString()
    ruc_representante:string;
    @IsNotEmpty()
    @IsString()
    nom_pj:string;
    @IsNotEmpty()
    @IsString()
    sector:string;
}

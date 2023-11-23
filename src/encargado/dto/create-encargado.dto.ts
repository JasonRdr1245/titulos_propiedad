import { IsNotEmpty, IsString } from "class-validator";

export class CreateEncargadoDto {
    @IsNotEmpty()
    @IsString()
    nombre_encargado:string;
}

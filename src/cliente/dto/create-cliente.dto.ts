import { IsNotEmpty, IsString } from "class-validator";

export class CreateClienteDto {
@IsString()
@IsNotEmpty()
  cli_doc: string;
  @IsString()
  @IsNotEmpty()
  nombres: string;
  @IsString()
  @IsNotEmpty()
  ape_paterno: string;
  @IsString()
  @IsNotEmpty()
  ape_materno: string;
  @IsString()
  @IsNotEmpty()
  domicilio: string;
  @IsString()
  @IsNotEmpty()
  correo: string;

}

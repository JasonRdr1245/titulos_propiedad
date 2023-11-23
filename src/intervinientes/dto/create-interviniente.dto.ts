import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateIntervinienteDto {
    @IsNotEmpty()
    @IsString()
    name:string;
}

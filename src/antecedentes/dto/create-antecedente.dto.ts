import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAntecedenteDto {
  @IsNotEmpty()
  @IsString()
  num_antecedente: string;
  @IsNotEmpty()
  @IsString()
  tipo_antecedente: string;
}

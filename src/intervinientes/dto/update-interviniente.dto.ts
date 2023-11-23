import { PartialType } from '@nestjs/mapped-types';
import { CreateIntervinienteDto } from './create-interviniente.dto';

export class UpdateIntervinienteDto extends PartialType(CreateIntervinienteDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCommercialDto } from './create-commercial.dto';

export class UpdateCommercialDto extends PartialType(CreateCommercialDto) {}

import {PartialType} from '@nestjs/mapped-types'
import {CreateLayoutDto} from './create-layout.dto'

export class UpdateLayoutDto extends PartialType(CreateLayoutDto) {}

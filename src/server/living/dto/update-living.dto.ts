import {PartialType} from '@nestjs/mapped-types'
import {CreateLivingDto} from './create-living.dto'

export class UpdateLivingDto extends PartialType(CreateLivingDto) {}

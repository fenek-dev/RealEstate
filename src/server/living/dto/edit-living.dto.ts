import {Prop} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import {CreateLivingDto} from './create-living.dto'

export class EditLivingDto extends CreateLivingDto {
  @Prop({type: mongoose.Schema.Types.ObjectId})
  readonly _id: mongoose.ObjectId
}

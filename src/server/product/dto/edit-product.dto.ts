import {Prop} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import {CreateProductDto} from './create-product.dto'

export class EditProductDto extends CreateProductDto {
  @Prop({type: mongoose.Schema.Types.ObjectId})
  readonly _id: mongoose.ObjectId
}

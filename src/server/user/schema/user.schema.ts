import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Product} from '../../product/schema/product.schema'

export type UserDocument = User & Document

@Schema()
export class User {
  _id: mongoose.Schema.Types.ObjectId

  @Prop()
  readonly name: string

  @Prop()
  readonly email: string

  @Prop()
  readonly password: string

  @Prop()
  readonly type: string

  @Prop()
  readonly phone: string

  @Prop()
  readonly photo: string

  @Prop({
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: []}],
  })
  products: Product[]
}

export const UserSchema = SchemaFactory.createForClass(User)

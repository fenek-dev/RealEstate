import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { Product } from 'src/server/product/schema/product.schema'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  readonly name: string

  @Prop()
  readonly email: string

  @Prop()
  readonly password: string

  @Prop()
  readonly type: string

  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: [] },
    ],
  })
  products: Product[]
}

export const UserSchema = SchemaFactory.createForClass(User)

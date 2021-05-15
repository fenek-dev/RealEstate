import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {User} from 'src/server/auth/schema/user.schema'

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop()
  readonly name: string

  @Prop()
  readonly type: string

  @Prop()
  readonly price: number

  @Prop({required: false})
  readonly description?: string

  @Prop()
  readonly date: number

  @Prop()
  readonly location: string

  @Prop()
  readonly area: number

  @Prop()
  readonly beds: number

  @Prop()
  readonly baths: number

  @Prop({required: false})
  readonly floor?: number

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  readonly author: User
}

export const ProductSchema = SchemaFactory.createForClass(Product)

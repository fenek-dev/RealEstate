import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop()
  readonly name: string

  @Prop()
  readonly type: string

  @Prop()
  readonly price: number

  @Prop()
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

  @Prop()
  readonly floor?: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)

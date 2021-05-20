import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type CategoryDocument = Category & Document

@Schema()
export class Category {
  @Prop({required: true, unique: true})
  readonly name: string

  @Prop({required: false})
  readonly area?: number

  @Prop({required: false})
  readonly year: number

  @Prop({required: false})
  readonly floors?: number

  @Prop({required: false})
  readonly class?: string

  @Prop({required: true})
  readonly type: string

  @Prop({required: false})
  readonly parking?: boolean
}

export const CategorySchema = SchemaFactory.createForClass(Category)

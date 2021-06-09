import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type LayoutDocument = Layout & Document

@Schema()
export class Layout {
  @Prop({required: true, unique: true})
  readonly name: string

  @Prop({required: true})
  readonly minArea: number

  @Prop({required: true})
  readonly maxArea: number

  @Prop({required: true})
  readonly rooms: number

  @Prop({type: [{required: false}], default: []})
  readonly photos?: string[]
}

export const LayoutSchema = SchemaFactory.createForClass(Layout)

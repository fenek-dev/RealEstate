import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Field, ObjectType, Int} from '@nestjs/graphql'

export type LayoutDocument = Layout & Document

@ObjectType()
@Schema()
export class Layout {
  @Field(() => String)
  readonly _id: mongoose.Schema.Types.ObjectId

  @Field(() => String)
  @Prop({required: true, unique: true})
  readonly name: string

  @Field(() => Int)
  @Prop({required: true})
  readonly minArea: number

  @Field(() => Int)
  @Prop({required: true})
  readonly maxArea: number

  @Field(() => Int)
  @Prop({required: true})
  readonly rooms: number

  @Field(() => [String], {nullable: true})
  @Prop({type: [{required: false}], default: []})
  readonly photos?: string[]
}

export const LayoutSchema = SchemaFactory.createForClass(Layout)

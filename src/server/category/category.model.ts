import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Field, ObjectType, Int} from '@nestjs/graphql'

export type CategoryDocument = Category & Document
@ObjectType()
@Schema()
export class Category {
  @Field(() => String)
  readonly _id: mongoose.Schema.Types.ObjectId

  @Field(() => String)
  @Prop({required: true, unique: true})
  readonly name: string

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly area?: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly year?: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly floors?: number

  @Field(() => String, {nullable: true})
  @Prop({required: false})
  readonly class?: string

  @Field(() => String)
  @Prop({required: true})
  readonly type: string

  @Field(() => Boolean, {nullable: true})
  @Prop({required: false})
  readonly parking?: boolean
}

export const CategorySchema = SchemaFactory.createForClass(Category)

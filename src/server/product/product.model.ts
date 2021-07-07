import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {User} from '../user/user.model'
import {Region} from '../region/region.model'
import {Layout} from '../layout/layout.model'
import {Category} from '../category/category.model'
import {Field, ObjectType, Int} from '@nestjs/graphql'

export type ProductDocument = Product & Document

@ObjectType()
@Schema()
export class Product {
  @Field(() => String)
  readonly _id: mongoose.Schema.Types.ObjectId

  @Field(() => Boolean, {defaultValue: false})
  readonly populate: boolean

  @Field(() => String)
  @Prop({required: true})
  readonly city: string

  @Field(() => String)
  @Prop({required: true})
  readonly address: string

  @Field(() => String)
  @Prop({type: [String]})
  readonly photos: string[]

  @Field(() => String, {nullable: true})
  @Prop({required: false})
  readonly type?: string

  @Field(() => Int)
  @Prop({required: true})
  readonly area: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly beds?: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly baths?: number

  @Field(() => String, {nullable: true})
  @Prop({required: false})
  readonly description?: string

  @Field(() => Int)
  @Prop({required: true})
  readonly price: number

  @Field(() => Int)
  @Prop({required: true})
  readonly date: number

  @Field(() => String, {nullable: true})
  @Prop({required: false})
  readonly property?: string

  @Field(() => Region, {nullable: true})
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Region.name,
    required: false,
  })
  readonly region?: mongoose.Schema.Types.ObjectId | Region

  @Field(() => User)
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true})
  readonly author: mongoose.Schema.Types.ObjectId | User

  @Field(() => Layout, {nullable: true})
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Layout.name,
    required: false,
  })
  readonly layout?: mongoose.Schema.Types.ObjectId | Layout

  @Field(() => Category, {nullable: true})
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  })
  readonly category?: mongoose.Schema.Types.ObjectId | Category
}

export const ProductSchema = SchemaFactory.createForClass(Product)

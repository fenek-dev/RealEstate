import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Field, ObjectType} from '@nestjs/graphql'
import {Product} from '../product/product.model'

export type UserDocument = User & Document

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  readonly _id: mongoose.Schema.Types.ObjectId

  @Field(() => String, {nullable: true})
  readonly token?: string

  @Field(() => String)
  @Prop()
  readonly name: string

  @Field(() => String)
  @Prop()
  readonly email: string

  @Field(() => String)
  @Prop()
  readonly password: string

  @Field(() => String)
  @Prop()
  readonly type: string

  @Field(() => String, {nullable: true})
  @Prop()
  readonly phone?: string

  @Field(() => String, {nullable: true})
  @Prop()
  readonly photo?: string

  @Field(() => [Product])
  @Prop({
    type: [
      {type: mongoose.Schema.Types.ObjectId, ref: Product.name, default: []},
    ],
  })
  products: mongoose.Schema.Types.ObjectId[] | Product[]
}

export const UserSchema = SchemaFactory.createForClass(User)

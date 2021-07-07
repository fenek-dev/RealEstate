import {Field, InputType, Int} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'

@InputType()
export class CreateProductInput {
  @Field(() => String)
  readonly city: string

  @Field(() => String)
  readonly address: string

  @Field(() => [String])
  readonly photos: string[]

  @Field(() => String)
  readonly type: string

  @Field(() => Int)
  readonly area: number

  @Field(() => Int, {nullable: true})
  readonly beds?: number

  @Field(() => Int, {nullable: true})
  readonly baths?: number

  @Field(() => String, {nullable: true})
  readonly description?: string

  @Field(() => Int)
  readonly price: number

  @Field(() => Int)
  readonly date: number

  @Field(() => String, {nullable: true})
  readonly property?: string

  @Field(() => String, {nullable: true})
  readonly region?: MongooseSchema.Types.ObjectId

  @Field(() => String)
  readonly author: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  readonly layout?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  readonly category?: MongooseSchema.Types.ObjectId
}

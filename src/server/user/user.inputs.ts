import {Schema as MongooseSchema} from 'mongoose'
import {Field, InputType} from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  readonly name: string
  @Field(() => String)
  readonly email: string
  @Field(() => String)
  readonly password: string
  @Field(() => String)
  readonly type: string
  @Field(() => String, {nullable: true})
  readonly phone?: string
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  readonly _id: MongooseSchema.Types.ObjectId
  @Field(() => String)
  readonly name: string
  @Field(() => String)
  readonly email: string
  @Field(() => String, {nullable: true})
  readonly photo?: string
  @Field(() => String, {nullable: true})
  readonly phone?: string
}

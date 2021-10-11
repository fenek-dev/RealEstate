import {Field, InputType, Int} from '@nestjs/graphql'

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  readonly name: string

  @Field(() => Int, {nullable: true})
  readonly area?: number

  @Field(() => Int)
  readonly year: number

  @Field(() => Int, {nullable: true})
  readonly floors?: number

  @Field(() => String, {nullable: true})
  readonly class?: string

  @Field(() => String)
  readonly type: string

  @Field(() => Boolean, {nullable: true})
  readonly parking?: boolean
}

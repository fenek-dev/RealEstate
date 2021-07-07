import {Field, InputType, Int} from '@nestjs/graphql'

@InputType()
export class CreateLayoutInput {
  @Field(() => String)
  readonly name: string

  @Field(() => Int)
  readonly minArea: number

  @Field(() => Int)
  readonly maxArea: number

  @Field(() => Int)
  readonly rooms: number

  @Field(() => [String], {nullable: true})
  readonly photos?: string[]
}

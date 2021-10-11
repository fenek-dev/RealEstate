import {Field, InputType, Int} from '@nestjs/graphql'

@InputType()
export class CreateRegionInput {
  @Field(() => String)
  readonly name: string

  @Field(() => Int)
  readonly population: number

  @Field(() => Int)
  readonly averageCost: number

  @Field(() => Int, {nullable: true})
  readonly shopCenters?: number

  @Field(() => Int, {nullable: true})
  readonly hospitals?: number

  @Field(() => Int, {nullable: true})
  readonly parks?: number
}

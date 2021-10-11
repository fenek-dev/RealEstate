import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import {Field, ObjectType, Int} from '@nestjs/graphql'

export type RegionDocument = Region & Document

@ObjectType()
@Schema()
export class Region {
  @Field(() => String)
  @Prop({required: true, unique: true})
  readonly name: string

  @Field(() => Int)
  @Prop({required: true})
  readonly population: number

  @Field(() => Int)
  @Prop({required: true})
  readonly averageCost: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly shopCenters?: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly hospitals?: number

  @Field(() => Int, {nullable: true})
  @Prop({required: false})
  readonly parks?: number
}

export const RegionSchema = SchemaFactory.createForClass(Region)

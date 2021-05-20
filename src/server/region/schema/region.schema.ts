import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type RegionDocument = Region & Document

@Schema()
export class Region {
  @Prop({required: true, unique: true})
  readonly name: string

  @Prop({required: true})
  readonly population: number

  @Prop({required: true})
  readonly averageCost: number

  @Prop({required: false})
  readonly shopCenters: number

  @Prop({required: false})
  readonly hospitals: number

  @Prop({required: false})
  readonly parks: number
}

export const RegionSchema = SchemaFactory.createForClass(Region)

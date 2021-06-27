import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {User} from '../../auth/schema/user.schema'
import {Region} from '../../region/schema/region.schema'
import {Layout} from '../../layout/schema/layout.schema'
import {Category} from '../../category/schema/category.schema'

export type LivingDocument = Living & Document

@Schema()
export class Living {
  @Prop({required: true})
  readonly city: string

  @Prop({required: true})
  readonly address: string

  @Prop({type: [String]})
  readonly photos: string[]

  @Prop({required: false})
  readonly type?: string

  @Prop({required: true})
  readonly area: number

  @Prop({required: false})
  readonly beds?: number

  @Prop({required: false})
  readonly baths?: number

  @Prop({required: false})
  readonly description: string

  @Prop({required: true})
  readonly price: number

  @Prop({required: true})
  readonly date: number

  @Prop({required: false})
  readonly property?: string

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: false})
  readonly region?: Region

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
  readonly author: User

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Layout', required: false})
  readonly layout?: Layout

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  })
  readonly category?: Category
}

export const LivingSchema = SchemaFactory.createForClass(Living)

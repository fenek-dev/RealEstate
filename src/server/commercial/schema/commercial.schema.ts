import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Region} from '../../region/schema/region.schema'
import {User} from '../../auth/schema/user.schema'
import {Layout} from '../../layout/schema/layout.schema'
import {Category} from '../../category/schema/category.schema'

export type CommercialDocument = Commercial & Document

@Schema()
export class Commercial {
  @Prop({required: true})
  readonly city: string

  @Prop({required: true})
  readonly address: string

  @Prop({type: [{required: false}]})
  readonly photos?: string[]

  @Prop({required: false})
  readonly type?: string

  @Prop({required: true})
  readonly area: number

  @Prop({required: false, max: 100})
  readonly tax?: number

  @Prop({required: false})
  readonly description: string

  @Prop({required: true})
  readonly price: number

  @Prop({required: true})
  readonly date: number

  @Prop({required: false})
  readonly property?: string

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true})
  readonly region: Region

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

export const CommercialSchema = SchemaFactory.createForClass(Commercial)

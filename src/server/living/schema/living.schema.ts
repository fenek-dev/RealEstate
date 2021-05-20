import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {User} from 'src/server/auth/schema/user.schema'

export type LivingDocument = Living & Document

@Schema()
export class Living {
  @Prop({required: true, maxlength: 50})
  readonly name: string

  @Prop({required: true})
  readonly type: string

  @Prop({required: true})
  readonly price: number

  @Prop({required: false})
  readonly description?: string

  @Prop({required: true})
  readonly date: number

  @Prop({required: true})
  readonly location: string

  @Prop({required: true})
  readonly area: number

  @Prop({required: false, max: 20})
  readonly beds?: number

  @Prop({required: false, max: 20})
  readonly baths?: number

  @Prop({required: false})
  readonly floor?: number

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  readonly author: User
}

export const LivingSchema = SchemaFactory.createForClass(Living)

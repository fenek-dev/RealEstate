import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Living} from '../../living/schema/living.schema'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  readonly name: string

  @Prop()
  readonly email: string

  @Prop()
  readonly password: string

  @Prop()
  readonly type: string

  @Prop({
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Living', default: []}],
  })
  products: Living[]
}

export const UserSchema = SchemaFactory.createForClass(User)

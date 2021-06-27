import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'
import {Living} from '../../living/schema/living.schema'
import {Commercial} from '../../commercial/schema/commercial.schema'

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

  @Prop()
  readonly phone: string

  @Prop()
  readonly photo: string

  @Prop({
    type: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'Living', default: []},
      {type: mongoose.Schema.Types.ObjectId, ref: 'Commercial', default: []},
    ],
  })
  products: Living[] | Commercial[]
}

export const UserSchema = SchemaFactory.createForClass(User)

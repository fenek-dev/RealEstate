import {ObjectId} from 'mongoose'

export class CreateCommercialDto {
  readonly city: string
  readonly adress: string
  readonly photos?: string[]
  readonly type?: string
  readonly area: number
  readonly tax?: number
  readonly description: string
  readonly price: number
  readonly date: number
  readonly property?: string
  readonly region: ObjectId
  readonly author: ObjectId
  readonly layout?: ObjectId
  readonly category?: ObjectId
}

import {User} from '../../user/user.model'
import {Category} from '../../category/category.model'
import {Layout} from '../../layout/schema/layout.schema'
import {Region} from '../../region/schema/region.schema'

export class CreateProductDto {
  readonly city: string
  readonly address: string
  readonly photos: string[]
  readonly type: string
  readonly area: number
  readonly beds?: number
  readonly baths?: number
  readonly description: string
  readonly price: number
  readonly date: number
  readonly property?: string
  readonly region?: Region
  readonly author: User
  readonly layout?: Layout
  readonly category?: Category
}

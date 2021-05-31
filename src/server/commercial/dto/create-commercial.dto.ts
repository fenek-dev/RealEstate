import {User} from '../../auth/schema/user.schema'
import {Category} from '../../category/schema/category.schema'
import {Layout} from '../../layout/schema/layout.schema'
import {Region} from '../../region/schema/region.schema'

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
  readonly region: Region
  readonly author: User
  readonly layout?: Layout
  readonly category?: Category
}

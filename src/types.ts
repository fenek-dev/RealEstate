export type ProductType = 'sell' | 'rent' | ''

export type ErrorType = {
  statusCode: number
  message: string
}

export interface ISearchProduct
  extends Omit<
    IProduct,
    'region' | 'layout' | 'tax' | 'description' | 'category' | 'author'
  > {
  onDelete?: (_id: string) => void
}

export interface ISearchState {
  products: ISearchProduct[]
  error?: ErrorType
}
export interface IProduct {
  readonly _id: string
  readonly city: string
  readonly address: string
  readonly photos?: string[]
  readonly type?: ProductType
  readonly area: number
  readonly beds?: number
  readonly baths?: number
  readonly tax?: number
  readonly description: string
  readonly price: number
  readonly date: number
  readonly property?: string
  readonly region: IRegion
  readonly author?: IUser
  readonly layout?: ILayout
  readonly category?: ICategory
}

export interface IRegion {
  readonly name: string
  readonly population: number
  readonly averageCost: number
  readonly shopCenters: number
  readonly hospitals: number
  readonly parks: number
}

export interface ILayout {
  readonly name: string
  readonly minArea: number
  readonly maxArea: number
  readonly rooms: number
  readonly photos?: string[]
}

export interface ICategory {
  readonly name: string
  readonly area?: number
  readonly year: number
  readonly floors?: number
  readonly class?: string
  readonly type: string
  readonly parking?: boolean
}

export interface IUser {
  readonly name: string
  readonly email: string
  readonly type: string
}

export interface IQuery {
  readonly city?: string
  readonly property?: string
  readonly type?: ProductType
  readonly beds?: string
  readonly baths?: string
  readonly min?: string
  readonly max?: string
}

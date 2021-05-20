export class CreateLivingDto {
  readonly name: string
  readonly type: string
  readonly price: number
  readonly description?: string
  readonly date: number
  readonly location: string
  readonly area: number
  readonly beds?: number
  readonly baths?: number
  readonly floor?: number
}

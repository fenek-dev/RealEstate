export class CreateCategoryDto {
  readonly name: string
  readonly area?: number
  readonly year: number
  readonly floors?: number
  readonly class?: string
  readonly type: string
  readonly parking?: boolean
}

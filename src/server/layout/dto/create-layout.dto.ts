export class CreateLayoutDto {
  readonly name: string
  readonly minArea: number
  readonly maxArea: number
  readonly rooms: number
  readonly photos?: string[]
}

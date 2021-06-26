export class CreateUserDto {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly type: string
  readonly phone?: string
}

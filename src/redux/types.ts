export type IAction<T = any> = (payload?: T) => {type: string; payload?: T}

export interface IUserResponse {
  _id: string
  email: string
  name: string
  type: string
  products: string[]
  token: string
}

export interface IError {
  statusCode: number
  message: string
}

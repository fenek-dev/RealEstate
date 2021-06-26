export enum UserActions {
  ADD_USER = 'ADD_USER',
  SET_USER = 'SET_USER',
  LOGIN_USER = 'LOGIN_USER',
  SET_USER_LOADING = 'SET_USER_LOADING',
  SET_USER_ERROR = 'SET_USER_ERROR',
  CREATE_USER = 'CREATE_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  CLEAN_USER = 'CLEAN_USER',
  EDIT_USER = 'EDIT_USER',
}

export enum ProductActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  SET_PRODUCT = 'SET_PRODUCT',
}

export enum SearchActions {
  ADD_SEARCH = 'ADD_SEARCH',
  SET_SEARCH = 'SET_SEARCH',
  CLEAN_SEARCH = 'CLEAN_SEARCH',
}

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

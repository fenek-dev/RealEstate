export enum ActionTypes {
  'ADD_USER',
  'ADD_PRODUCT',
  'SET_PRODUCT',
}

export type IAction<T = any> = (payload?: T) => {type: ActionTypes; payload?: T}

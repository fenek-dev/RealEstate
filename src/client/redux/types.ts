export enum ActionTypes {
  'ADD_USER',
}

export type IAction<T = any> = (payload?: T) => {type: ActionTypes; payload?: T}

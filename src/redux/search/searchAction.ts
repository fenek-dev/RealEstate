import {IQuery} from '../../types'
import {IAction, SearchActions} from '../types'

export type IAddSearchAction = IAction<IQuery>

export const addSearchAction: IAddSearchAction = payload => ({
  type: SearchActions.ADD_SEARCH,
  payload,
})

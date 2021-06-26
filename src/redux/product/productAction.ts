import {IAction, ProductActions} from '../types'

export const addProductAction: IAction = () => ({
  type: ProductActions.ADD_PRODUCT,
})

import {CreateCommercialDto} from '../../server/commercial/dto/create-commercial.dto'
import {CreateLivingDto} from '../../server/product/dto/create-product.dto'
import {IAction, ProductActions} from '../types'

export const addProductAction: IAction<CreateCommercialDto | CreateLivingDto> =
  payload => ({
    type: ProductActions.ADD_PRODUCT,
    payload,
  })

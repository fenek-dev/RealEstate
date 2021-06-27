import {CreateCommercialDto} from '../../server/commercial/dto/create-commercial.dto'
import {CreateLivingDto} from '../../server/living/dto/create-living.dto'
import {IAction, ProductActions} from '../types'

export const addProductAction: IAction<CreateCommercialDto | CreateLivingDto> =
  payload => ({
    type: ProductActions.ADD_PRODUCT,
    payload,
  })

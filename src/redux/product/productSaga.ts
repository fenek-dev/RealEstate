import {takeEvery, put, call, all, race} from 'redux-saga/effects'
import {CreateCommercialDto} from '../../server/commercial/dto/create-commercial.dto'
import {CreateLivingDto} from '../../server/living/dto/create-living.dto'
import {Api} from '../../utils/api'
import {IAction, ProductActions} from '../types'

function* workerAddProductAction(
  action: ReturnType<IAction<CreateLivingDto | CreateCommercialDto>>,
) {
  const type =
    action?.payload.property === 'office' || action?.payload.property === 'shop'
      ? 'commercial'
      : 'living'
  const result = yield call(Api, `api/${type}/create`, {
    method: 'POST',
    body: action.payload,
  })
  yield put({
    type: ProductActions.SET_PRODUCT,
    payload: result,
  })
}

export function* watchAddProductAction() {
  yield takeEvery(ProductActions.ADD_PRODUCT, workerAddProductAction)
}

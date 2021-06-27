import {takeEvery, put, call, all} from 'redux-saga/effects'
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

function* workerGetProductAction(action: ReturnType<IAction<{id: string}>>) {
  const result = yield all([
    call(Api, `api/living/${action.payload.id}`),
    call(Api, `api/living/${action.payload.id}`),
  ])
  console.log(result)
}

export function* watchAddProductAction() {
  yield takeEvery(ProductActions.ADD_PRODUCT, workerAddProductAction)
}

export function* watchGetProductAction() {
  yield takeEvery(ProductActions.GET_PRODUCT, workerGetProductAction)
}

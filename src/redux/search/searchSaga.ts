import {takeEvery, put, call} from 'redux-saga/effects'
import {ISearchProduct} from '../../types'
import {Api} from '../../utils/api'
import {SearchActions} from '../types'
import {IAddSearchAction} from './searchAction'

function* workerAddSearchAction(action: ReturnType<IAddSearchAction>) {
  const type =
    action?.payload.property === 'office' || action?.payload.property === 'shop'
      ? 'commercial'
      : 'living'

  yield put({type: SearchActions.CLEAN_SEARCH})

  const result: ISearchProduct = yield call(Api, `api/${type}/search`, {
    body: action.payload,
    method: 'POST',
  })

  yield put({
    type: SearchActions.SET_SEARCH,
    payload: result,
  })
}

export function* watchAddSearchAction() {
  yield takeEvery(SearchActions.ADD_SEARCH, workerAddSearchAction)
}

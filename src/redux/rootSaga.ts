import {all} from 'redux-saga/effects'
import {watchAddProductAction} from './product/productSaga'
import {watchAddSearchAction} from './search/searchSaga'
import {
  watchAddAction,
  watchCreateUserAction,
  watchEditUserAction,
  watchLoginUserAction,
  watchLogoutUserAction,
} from './user/userSaga'

export default function* rootSaga() {
  yield all([
    watchCreateUserAction(),
    watchLoginUserAction(),
    watchAddAction(),
    watchAddProductAction(),
    watchAddSearchAction(),
    watchLogoutUserAction(),
    watchEditUserAction(),
  ])
}

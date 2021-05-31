import {takeEvery} from 'redux-saga/effects'

export default function* watchAddAction() {
  yield takeEvery('ADD', workerAddAction)
}

function* workerAddAction() {
  const products = yield setTimeout(() => {
    return 1
  }, 1000)
  console.log(products)
}
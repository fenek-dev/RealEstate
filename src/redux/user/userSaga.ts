import {call, put, takeEvery} from 'redux-saga/effects'
import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {Api} from 'src/utils/api'
import {setCookie} from 'src/utils/cookie'
import {ADD_USER, CREATE_USER, SET_USER} from '../Constants'
import {IAction, ICreateUserResponse} from '../types'

export function* watchAddAction() {
  yield takeEvery(ADD_USER, workerAddAction)
}

function* workerAddAction() {
  const products = yield setTimeout(() => {
    return 1
  }, 1000)
  console.log(products)
}

export function* watchCreateUserAction() {
  yield takeEvery(CREATE_USER, workerCreateUserAction)
}

function* workerCreateUserAction(action: ReturnType<IAction<CreateUserDto>>) {
  const {payload} = action
  const user: ICreateUserResponse = yield call(Api, '/api/auth/register', {
    body: JSON.stringify(payload),
    method: 'POST',
  })
  setCookie('token', user.token, {secure: true, httpOnly: true})
  yield put({
    type: SET_USER,
    payload: {
      email: user.email,
      type: user.type,
      products: user.products,
      _id: user._id,
      name: user.name,
    },
  })
}

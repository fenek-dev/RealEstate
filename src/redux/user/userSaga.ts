import {call, put, takeEvery} from 'redux-saga/effects'
import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {IEmailAndPassword} from 'src/server/auth/types'
import {Api} from 'src/utils/api'
import {setCookie} from 'src/utils/cookie'
import {ADD_USER, CREATE_USER, LOGIN_USER, SET_USER} from '../constants'
import {IAction, IUserResponse} from '../types'
import {errorUserAction, loadingUserAction} from './userAction'

export function* watchAddAction() {
  yield takeEvery(ADD_USER, workerAddAction)
}

function* workerAddAction() {
  try {
    const user: IUserResponse = yield call(Api, 'api/auth/profile')
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
  } catch (error) {
    yield put(errorUserAction(error))
  } finally {
    yield put(loadingUserAction(true))
  }
}

export function* watchCreateUserAction() {
  yield takeEvery(CREATE_USER, workerCreateUserAction)
}

function* workerCreateUserAction(action: ReturnType<IAction<CreateUserDto>>) {
  try {
    const {payload} = action
    const user: IUserResponse = yield call(Api, '/api/auth/register', {
      body: JSON.stringify(payload),
      method: 'POST',
    })
    setCookie('token', user.token)
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
  } catch (error) {
    yield put(errorUserAction(error))
  } finally {
    yield put(loadingUserAction(true))
  }
}

export function* watchLoginUserAction() {
  yield takeEvery(LOGIN_USER, workerLoginUserAction)
}

export function* workerLoginUserAction(
  action: ReturnType<IAction<IEmailAndPassword>>,
) {
  try {
    const user = yield call(Api, 'api/auth/login', {
      body: action.payload,
      method: 'POST',
    })
    setCookie('token', user.token)
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
  } catch (error) {
    yield put(errorUserAction(error))
  } finally {
    yield put(loadingUserAction(true))
  }
}

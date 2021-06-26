import {call, put, takeEvery} from 'redux-saga/effects'
import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {IEmailAndPassword} from 'src/server/auth/types'
import {Api} from '../../utils/api'
import {setCookie} from 'src/utils/cookie'
import {UpdateUserDto} from '../../server/auth/dto/update-user.dto'
import {IAction, IUserResponse, UserActions} from '../types'
import {errorUserAction, loadingUserAction} from './userAction'

export function* watchAddAction() {
  yield takeEvery(UserActions.ADD_USER, workerAddAction)
}

function* workerAddAction() {
  try {
    const user: IUserResponse = yield call(Api, 'api/auth/profile')
    yield put({
      type: UserActions.SET_USER,
      payload: {
        email: user.email,
        type: user.type,
        products: user.products,
        _id: user._id,
        name: user.name,
        phone: user.phone,
      },
    })
  } catch (error) {
    yield put(errorUserAction(error))
  } finally {
    yield put(loadingUserAction(true))
  }
}

function* workerCreateUserAction(action: ReturnType<IAction<CreateUserDto>>) {
  try {
    const {payload} = action
    const user: IUserResponse = yield call(Api, '/api/auth/register', {
      body: payload,
      method: 'POST',
    })
    setCookie('token', user.token)

    yield put({
      type: UserActions.SET_USER,
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
      type: UserActions.SET_USER,
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

function* workerLogoutAction() {
  console.log('hello')

  setCookie('token', 'hello')
  yield put({type: UserActions.CLEAN_USER})
}

function* workerEditUserAction(action: ReturnType<IAction<UpdateUserDto>>) {
  const result = yield call(Api, 'api/auth/profile', {
    body: action.payload,
    method: 'PATCH',
  })
  yield put({type: UserActions.SET_USER, payload: result})
}

export function* watchCreateUserAction() {
  yield takeEvery(UserActions.CREATE_USER, workerCreateUserAction)
}

export function* watchLoginUserAction() {
  yield takeEvery(UserActions.LOGIN_USER, workerLoginUserAction)
}

export function* watchLogoutUserAction() {
  yield takeEvery(UserActions.LOGOUT_USER, workerLogoutAction)
}

export function* watchEditUserAction() {
  yield takeEvery(UserActions.EDIT_USER, workerEditUserAction)
}

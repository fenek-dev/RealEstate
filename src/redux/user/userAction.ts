import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {IEmailAndPassword} from 'src/server/auth/types'
import {
  ADD_USER,
  CREATE_USER,
  LOGIN_USER,
  SET_USER_ERROR,
  SET_USER_LOADING,
} from '../constants'
import {IAction, IError} from '../types'

export const addUserAction: IAction = () => ({
  type: ADD_USER,
})

export const createUserAction: IAction<CreateUserDto> = payload => ({
  type: CREATE_USER,
  payload,
})

export const loginUserAction: IAction<IEmailAndPassword> = payload => ({
  type: LOGIN_USER,
  payload,
})

export const loadingUserAction: IAction<boolean> = payload => ({
  type: SET_USER_LOADING,
  payload,
})

export const errorUserAction: IAction<IError> = payload => ({
  type: SET_USER_ERROR,
  payload,
})

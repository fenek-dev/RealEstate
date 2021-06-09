import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {IEmailAndPassword} from 'src/server/auth/types'
import {ADD_USER, CREATE_USER, LOGIN_USER} from '../constants'
import {IAction} from '../types'

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

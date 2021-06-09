import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {ADD_USER, CREATE_USER} from '../Constants'
import {IAction} from '../types'

export const addUserAction: IAction = () => ({
  type: ADD_USER,
})

export const createUserAction: IAction<CreateUserDto> = payload => ({
  type: CREATE_USER,
  payload,
})

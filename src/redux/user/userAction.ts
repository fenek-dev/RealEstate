import {CreateUserDto} from 'src/server/auth/dto/create-user.dto'
import {IEmailAndPassword} from 'src/server/auth/types'
import {UpdateUserDto} from '../../server/user/dto/update-user.dto'
import {UserActions, IAction, IError} from '../types'

export const addUserAction: IAction = () => ({
  type: UserActions.ADD_USER,
})

export const createUserAction: IAction<CreateUserDto> = payload => ({
  type: UserActions.CREATE_USER,
  payload,
})

export const loginUserAction: IAction<IEmailAndPassword> = payload => ({
  type: UserActions.LOGIN_USER,
  payload,
})

export const loadingUserAction: IAction<boolean> = payload => ({
  type: UserActions.SET_USER_LOADING,
  payload,
})

export const errorUserAction: IAction<IError> = payload => ({
  type: UserActions.SET_USER_ERROR,
  payload,
})

export const logoutUserAction: IAction = () => ({
  type: UserActions.LOGOUT_USER,
})

export const editUserAction: IAction<UpdateUserDto> = payload => ({
  type: UserActions.EDIT_USER,
  payload,
})

export const uploadUserAction: IAction<{file: string; id: string}> =
  payload => ({
    type: UserActions.UPLOAD_IMAGE,
    payload,
  })

export const deleteUserProductAction: IAction<{id: string; type: string}> =
  payload => ({
    type: UserActions.DELETE_USER_PRODUCT,
    payload,
  })

import {HYDRATE} from 'next-redux-wrapper'
import {SET_USER, SET_USER_ERROR, SET_USER_LOADING} from '../constants'
import {IError} from '../types'
export interface UserInitialStateInterface {
  _id: string
  email: string
  name: string
  phone?: string
  photo?: string
  products?: string[]
  loading: boolean
  error: IError
}
const initialState: UserInitialStateInterface = {
  _id: '',
  email: '',
  name: '',
  products: [],
  loading: false,
  error: {
    statusCode: 0,
    message: '',
  },
}

function reducer(state = initialState, action): UserInitialStateInterface {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    case SET_USER: {
      return {...state, ...action.payload}
    }

    case SET_USER_LOADING: {
      return {...state, loading: action.payload}
    }

    case SET_USER_ERROR: {
      return {...state, error: action.payload}
    }

    default:
      return state
  }
}

export default reducer

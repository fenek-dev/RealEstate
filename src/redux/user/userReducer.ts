import {HYDRATE} from 'next-redux-wrapper'
import {SET_USER} from '../constants'
export interface UserInitialStateInterface {
  _id: string
  email: string
  name: string
  phone?: string
  photo?: string
  products?: string[]
}
const initialState: UserInitialStateInterface = {
  _id: '',
  email: '',
  name: '',
  products: [],
}

function reducer(state = initialState, action): UserInitialStateInterface {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    case SET_USER: {
      return {...state, ...action.payload}
    }

    default:
      return state
  }
}

export default reducer

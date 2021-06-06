import {HYDRATE} from 'next-redux-wrapper'
export interface UserInitialStateInterface {
  email: string
  name: string
}
const initialState: UserInitialStateInterface = {
  email: '',
  name: '',
}

function reducer(state = initialState, action): UserInitialStateInterface {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    default:
      return state
  }
}

export default reducer

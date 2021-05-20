import {HYDRATE} from 'next-redux-wrapper'
interface UserInitialStateInterface {
  email: string
}
const initialState: UserInitialStateInterface = {
  email: '',
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

import {HYDRATE} from 'next-redux-wrapper'
import {ISearchState} from '../../types'

const initialState: ISearchState = {
  products: [],
}

function reducer(state = initialState, action): ISearchState {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    case 'SET_SEARCH': {
      return {...state, products: [...state.products, action.payload]}
    }

    default:
      return state
  }
}

export default reducer

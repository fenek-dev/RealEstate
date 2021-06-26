import {HYDRATE} from 'next-redux-wrapper'
import {ISearchState} from '../../types'
import {SearchActions} from '../types'

const initialState: ISearchState = {
  products: [],
}

function reducer(state = initialState, action): ISearchState {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    case SearchActions.SET_SEARCH: {
      return {...state, products: [...state.products, ...action.payload]}
    }

    case SearchActions.CLEAN_SEARCH: {
      return {...state, products: []}
    }

    default:
      return state
  }
}

export default reducer

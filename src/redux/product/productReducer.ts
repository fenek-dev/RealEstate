import {HYDRATE} from 'next-redux-wrapper'
import {IProduct} from '../../types'
import {ProductActions} from '../types'
const initialState: IProduct = {
  address: '',
  area: 0,
  photos: [],
  author: {
    email: '',
    name: '',
    type: '',
  },
  city: '',
  date: 0,
  description: '',
  price: 0,
  region: {
    averageCost: 0,
    hospitals: 0,
    name: '',
    parks: 0,
    population: 0,
    shopCenters: 0,
  },
  baths: 0,
  beds: 0,
  tax: 0,
  property: '',
  type: '',
  category: {
    name: '',
    type: '',
    year: 0,
    area: 0,
    class: '',
    floors: 0,
    parking: false,
  },
  layout: {
    name: '',
    maxArea: 0,
    minArea: 0,
    rooms: 0,
    photos: [],
  },
}

function reducer(state = initialState, action): IProduct {
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload}
    }

    case ProductActions.SET_PRODUCT: {
      return {...state, ...action.payload}
    }

    default:
      return state
  }
}

export default reducer

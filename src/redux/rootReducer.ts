import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import productReducer from './product/productReducer'

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
})

export type IRootReducer = ReturnType<typeof reducer>

export default reducer

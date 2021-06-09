import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import productReducer from './product/productReducer'
import searchReducer from './search/searchReducer'
import {useSelector} from 'react-redux'

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  search: searchReducer,
})

export type IRootReducer = ReturnType<typeof reducer>

export default reducer

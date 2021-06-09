import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'

import rootReducer from './rootReducer'
import {watchAddProductAction} from './product/productSaga'
import {watchAddSearchAction} from './search/searchSaga'
import {watchAddAction, watchCreateUserAction} from './user/userSaga'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    import('redux-devtools-extension').then(({composeWithDevTools}) => {
      composeWithDevTools(applyMiddleware(...middleware))
    })
  }
  return applyMiddleware(...middleware)
}

export const makeStore = context => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  sagaMiddleware.run(watchAddProductAction)
  sagaMiddleware.run(watchAddSearchAction)
  sagaMiddleware.run(watchAddAction)
  sagaMiddleware.run(watchCreateUserAction)
  return store
}

export const wrapper = createWrapper(makeStore, {debug: true})

import {takeEvery, put} from 'redux-saga/effects'
import {ActionTypes} from '../types'

export function* watchAddProductAction() {
  yield takeEvery('ADD_PRODUCT', workerAddProductAction)
}

function* workerAddProductAction() {
  yield put({
    type: 'SET_PRODUCT',
    payload: {
      address: 'Moscow, Red Square',
      area: 123,
      photos: [
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
      ],
      author: {
        email: 'email',
        name: 'arthur',
        type: 'buyer',
      },
      city: 'Moscow',
      date: 23235,
      description: 'A brilliant flat in Moscow',
      price: 120,
      region: {
        averageCost: 100,
        hospitals: 21,
        name: 'Moscow',
        parks: 2,
        population: 244,
        shopCenters: 3,
      },
      baths: 2,
      beds: 2,
      tax: 0,
      property: 'brick',
      type: 'rent',
      category: {
        name: 'sdf',
        type: 'asdf',
        year: 2010,
        area: 1235,
        class: 'a',
        floors: 12,
        parking: false,
      },
      layout: {
        name: 'A83',
        maxArea: 123,
        minArea: 12,
        rooms: 2,
        photos: [
          'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
        ],
      },
    },
  })
}

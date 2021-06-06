import {takeEvery, put} from 'redux-saga/effects'

export function* watchAddSearchAction() {
  yield takeEvery('ADD_SEARCH', workerAddSearchAction)
}

function* workerAddSearchAction() {
  yield put({
    type: 'SET_SEARCH',
    payload: {
      address: 'Moscow, Red Square',
      area: 123,
      photos: [
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
        'https://s.iha.com/1155100002994/Ferienwohnungen-Toronto-Pied-a-Terre_2.jpeg',
      ],
      city: 'Moscow',
      date: 23235,
      description: 'A brilliant flat in Moscow',
      price: 120,
      baths: 2,
      beds: 2,
      tax: 0,
      property: 'brick',
      type: 'rent',
    },
  })
}

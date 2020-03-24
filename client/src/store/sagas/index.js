import { all, fork } from 'redux-saga/effects'
import { watchAddCard, watchFetchAllCards } from './cards'

export default function* root() {
    yield all([
          fork(watchAddCard),
          fork(watchFetchAllCards)
    ])
}

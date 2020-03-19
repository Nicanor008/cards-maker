import { all, fork } from 'redux-saga/effects'
import { watchAddCard } from './cards'

export default function* root() {
    yield all([
          fork(watchAddCard)
    ])
}

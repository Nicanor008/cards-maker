import { all, fork } from 'redux-saga/effects'
import { watchAddCard, watchFetchAllCards } from './cards'
import { watchAddLoginUser } from './auth'

export default function* root() {
    yield all([
          fork(watchAddCard),
          fork(watchFetchAllCards),
          fork(watchAddLoginUser)
    ])
}

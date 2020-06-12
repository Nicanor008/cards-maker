import { all, fork } from 'redux-saga/effects'
import { watchAddCard, watchFetchAllUserCards } from './cards'
import { watchAddLoginUser } from './auth'

export default function* root() {
    yield all([
          fork(watchAddCard),
          fork(watchFetchAllUserCards),
          fork(watchAddLoginUser)
    ])
}

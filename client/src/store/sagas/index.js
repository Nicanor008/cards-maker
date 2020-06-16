import { all, fork } from 'redux-saga/effects'
import {
    watchAddCard,
    watchFetchAllUserCards,
    watchFetchAllCards,
    watchFetchSingleCard,
} from './cards'
import {
    watchAddLoginUser,
    watchAddSignupUser,
    watchForgotPassword,
    watchResetPassword,
} from './auth'
import { watchSearchByName, watchSearchByTag } from './searchCards'

export default function* root() {
    yield all([
        fork(watchAddCard),
        fork(watchFetchAllUserCards),
        fork(watchAddLoginUser),
        fork(watchFetchAllCards),
        fork(watchSearchByName),
        fork(watchSearchByTag),
        fork(watchFetchSingleCard),
        fork(watchAddSignupUser),
        fork(watchForgotPassword),
        fork(watchResetPassword),
    ])
}

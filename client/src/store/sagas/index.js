import { all, fork } from 'redux-saga/effects'
import {
    watchAddCard,
    watchFetchAllUserCards,
    watchFetchAllCards,
    watchFetchSingleCard,
    watchDeleteCard,
    watchUpdateCard
} from './cards'
import {
    watchAddLoginUser,
    watchAddSignupUser,
    watchForgotPassword,
    watchResetPassword,
    watchVerifyAccount
} from './auth'
import { watchSearchByName, watchSearchByTag } from './searchCards'
import {  watchFetchSingleUser } from './user'

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
        fork(watchVerifyAccount),
        fork(watchUpdateCard),
        fork(watchDeleteCard),
        fork(watchFetchSingleUser)
    ])
}

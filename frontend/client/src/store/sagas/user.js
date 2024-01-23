import { put, call, takeEvery } from 'redux-saga/effects'
import toastr from 'toastr'
import * as actions from '../actions/user'
import { api } from '../api/api'
import { FETCH_SINGLE_USER, DELETE_SINGLE_USER, DEACTIVATE_SINGLE_USER } from '../constants'

export function* fetchSingleUser(action) {
    try {
        const response = yield call(api.user.getSingleUser, action.payload)
        return yield put(actions.FetchSingleUserSuccess(response.data))
    } catch (e) {
        let newError
        yield put(actions.FetchSingleUserFailure(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}


// de-activate user account
export function* deactivateUser(action) {
    try {
        const response = yield call(api.user.deactivateUser, action.payload)
        yield put(actions.DeactivateSingleUserSuccess(response.data))
        toastr.success(response.data.message, 'Success')
    } catch (e) {
        let newError
        yield put(actions.DeactivateSingleUserFailure(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}


// delete user account
export function* deleteUser(action) {
    try {
        const response = yield call(api.user.deleteUser, action.payload)
        yield put(actions.DeleteSingleUserSuccess(response.data))
        return toastr.success(response.data.message, 'Success')
    } catch (e) {
        let newError
        yield put(actions.DeleteSingleUserFailure(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

/** WATCHERS */
export function* watchFetchSingleUser() {
    yield takeEvery(FETCH_SINGLE_USER, fetchSingleUser)
}
export function* watchDeactivateUser() {
    yield takeEvery(DEACTIVATE_SINGLE_USER, deactivateUser)
}
export function* watchDeleteUser() {
    yield takeEvery(DELETE_SINGLE_USER, deleteUser)
}

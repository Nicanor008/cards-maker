import { put, call, takeEvery } from 'redux-saga/effects'
import toastr from 'toastr'
import * as actions from '../actions/user'
import { api } from '../api/api'
import { FETCH_SINGLE_USER } from '../constants'

export function* fetchSingleUser(action) {
    console.log(">>>>>>>>>>>......in sagas.....", action)
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

/** WATCHERS */
export function* watchFetchSingleUser() {
    yield takeEvery(FETCH_SINGLE_USER, fetchSingleUser)
}

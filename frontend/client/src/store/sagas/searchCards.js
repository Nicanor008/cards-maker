import { put, call, takeEvery } from 'redux-saga/effects'
import toastr from 'toastr'
import * as actions from '../actions/searchCards'
import { api } from '../api/api'
import { SEARCH_BY_NAME, SEARCH_BY_TAG } from '../constants'

export function* searchByName(action) {
    try {
        const response = yield call(api.cards.searchByName, action.payload)
        return yield put(actions.SearchCardsByNameSuccess(response.data))
    } catch (e) {
        return yield put(actions.SearchCardsByNameFailure(e))
    }
}

export function* searchByTag(action) {
    try {
        const response = yield call(api.cards.searchByTag, action.payload)
        yield put(actions.SearchCardsByTagSuccess(response.data))
        toastr.success(response.data.message)
    } catch (e) {
        yield put(actions.SearchCardsByTagFailure(e))
    }
}

/** WATCHERS */
export function* watchSearchByName() {
    yield takeEvery(SEARCH_BY_NAME, searchByName)
}
export function* watchSearchByTag() {
    yield takeEvery(SEARCH_BY_TAG, searchByTag)
}
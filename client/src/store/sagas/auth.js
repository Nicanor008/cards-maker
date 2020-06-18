import { put, call, takeEvery } from 'redux-saga/effects'
import toastr from 'toastr'
import * as actions from '../actions/auth'
import { api } from '../api/api'
import { LOGIN, SIGNUP, FORGOT_PASSWORD, RESET_PASSWORD, VERIFY_ACCOUNT } from '../constants'

toastr.options = {
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeEasing: 'swing',
}

export function* LoginUser(action) {
    try {
        const response = yield call(api.auth.login, action.payload)
        yield put(actions.LoginSuccessRequest(response.data))
        toastr.success(response.data.message)
        const token = response.data.token
        return localStorage.setItem('token', token)
    } catch (e) {
        let newError
        yield put(actions.LoginFailureRequest(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

// signup
export function* signupUser(action) {
    try {
        const response = yield call(api.auth.signup, action.payload)
        yield put(actions.signupSuccessRequest(response.data))
        toastr.success(response.data.messages)
    } catch (e) {
        let newError
        yield put(actions.signupFailureRequest(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

// forgot password
export function* forgotPassword(action) {
    try {
        const response = yield call(api.auth.forgotPassword, action.payload)
        yield put(actions.forgotPasswordSuccessRequest(response.data))
        toastr.success(response.data.message)
    } catch (e) {
        let newError
        yield put(actions.forgotPasswordFailureRequest(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

// reset password
export function* resetPassword(action) {
    try {
        const response = yield call(api.auth.resetPassword, action.payload, action.email)
        yield put(actions.ResetPasswordSuccess(response.data))
        toastr.success(response.message)
    } catch (e) {
        let newError
        yield put(actions.ResetPasswordFailure(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

// verify/Activate account
export function* verifyAccount(action) {
    try {
        const response = yield call(api.auth.verifyAccount, action.payload)
        yield put(actions.VerifyAccountSuccess(response.data))
        toastr.success(response.data.message)
    } catch (e) {
        let newError
        yield put(actions.VerifyAccountFailure(e))
        newError = e.response.data.message
        return toastr.warning(newError)
    }
}

/** WATCHERS */
export function* watchAddLoginUser() {
    yield takeEvery(LOGIN, LoginUser)
}
export function* watchAddSignupUser() {
    yield takeEvery(SIGNUP, signupUser)
}
export function* watchForgotPassword() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword)
}
export function* watchResetPassword() {
    yield takeEvery(RESET_PASSWORD, resetPassword)
}
export function* watchVerifyAccount() {
    yield takeEvery(VERIFY_ACCOUNT, verifyAccount)
}

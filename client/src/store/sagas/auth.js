import { put, call, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import * as actions from '../actions/auth';
import { api } from '../api/api'
import { LOGIN, SIGNUP, FORGOT_PASSWORD } from '../constants';

toastr.options = {
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeEasing: 'swing',
};

export function* LoginUser(action) {
  try {
    const response = yield call(api.auth.login, action.payload);
    yield put(actions.LoginSuccessRequest(response.data));
    toastr.success(response.data.message);
    const token = response.data.token;
    return localStorage.setItem("token", token);
  } catch (e) {
    let newError;
    yield put(actions.LoginFailureRequest(e));
    newError = e.response.data.message;
    return toastr.warning(newError);
  }
}

// signup
export function* signupUser(action) {
  try {
    const response = yield call(api.auth.signup, action.payload);
    yield put(actions.signupSuccessRequest(response.data));
    toastr.success(response.data.messages);
  } catch (e) {
    let newError;
    yield put(actions.signupFailureRequest(e));
    newError = e.response.data.message;
    return toastr.warning(newError);
  }
}

// forgot password
export function* forgotPassword(action) {
  try {
    const response = yield call(api.auth.forgotPassword, action.payload);
    yield put(actions.forgotPasswordSuccessRequest(response.data));
    toastr.success(response.data.message);
  } catch (e) {
    let newError;
    yield put(actions.forgotPasswordFailureRequest(e));
    newError = e.response.data.message;
    return toastr.warning(newError);
  }
}

/** WATCHERS */
export function* watchAddLoginUser() {
  yield takeEvery(LOGIN, LoginUser);
}
export function* watchAddSignupUser() {
  yield takeEvery(SIGNUP, signupUser);
}
export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

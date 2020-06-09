import { put, call, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import * as actions from '../actions/auth';
import { api } from '../api/api'
import { LOGIN } from '../constants';

toastr.options = {
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeEasing: 'swing',
};

export function* LoginUser(action) {
  try {
    const response = yield call(api.login.create, action.payload);
    yield put(actions.LoginSuccessRequest(response.data));
    toastr.success(response.data.message);
    const userToken = response.data.token;
    const user = response.data.data._id;
    const token = [];
    token.push(user, userToken);
    return localStorage.setItem("token", JSON.stringify(token));
  } catch (e) {
    let newError;
    yield put(actions.LoginFailureRequest(e));
    newError = e.response.data.message;
    return toastr.warning(newError);
  }
}

/** WATCHERS */
export function* watchAddLoginUser() {
  yield takeEvery(LOGIN, LoginUser);
}

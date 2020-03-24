import { put, call, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import * as actions from '../actions/cards';
import { api } from '../api/api'
import { CARDS, FETCH_CARDS } from '../constants';

toastr.options = {
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeEasing: 'swing',
};

export function* createCard(action) {
  try {
    const response = yield call(api.cards.create, action.payload);
    yield put(actions.CardsSuccessRequest(response.data));
    toastr.success(response.data.message);
  } catch (e) {
    let newError;
    yield put(actions.CardsFailureRequest(e));
    newError = e.response.data.message;
    toastr.warning(newError);
  }
}

export function* fetchAllCards(action) {
  try {
    const response = yield call(api.cards.list, action.payload);
    const { data } = response;
    yield put(actions.CardsSuccessRequest(data));
  } catch (error) {
    yield put(actions.FetchCardsFailureRequest({}));
    const errorMessage = error.response
      ? error.response.data.message
      : 'Error in retrieving All Cards';
    toastr.warning(errorMessage);
  }
}

/** WATCHERS */
export function* watchAddCard() {
  yield takeEvery(CARDS, createCard);
}
export function* watchFetchAllCards() {
  yield takeEvery(FETCH_CARDS, fetchAllCards)
}

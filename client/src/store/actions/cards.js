import {
    CARDS,
    CARDS_SUCCESS,
    CARDS_FAILURE,
    FETCH_CARDS,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,
    FETCH_USER_CARDS,
    FETCH_USER_CARDS_SUCCESS,
    FETCH_USER_CARDS_FAILURE,
  } from '../constants';
  
  // create cards
  export const CardsRequest = data => ({
    type: CARDS,
    payload: data
  });
  
  export const CardsSuccessRequest = (data) => ({
    type: CARDS_SUCCESS,
    payload: data,
  });

  export const CardsFailureRequest = (data) => ({
    type: CARDS_FAILURE,
    data,
  });
  
  // FETCH CARDS
  export const FetchCardsRequest = data => ({
    type: FETCH_CARDS,
    payload: data
  });
  
  export const FetchCardsSuccessRequest = (data) => ({
    type: FETCH_CARDS_SUCCESS,
    payload: data,
  });

  export const FetchCardsFailureRequest = (data) => ({
    type: FETCH_CARDS_FAILURE,
    data,
  });
  
  // GET USER CARDS
  export const FetchUserCardsRequest = data => ({
    type: FETCH_USER_CARDS,
    payload: data
  });
  
  export const FetchUserCardsSuccessRequest = (data) => ({
    type: FETCH_USER_CARDS_SUCCESS,
    payload: data,
  });

  export const FetchUserCardsFailureRequest = (data) => ({
    type: FETCH_USER_CARDS_FAILURE,
    data,
  });

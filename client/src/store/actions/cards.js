import {
    CARDS,
    CARDS_SUCCESS,
    CARDS_FAILURE,
  } from '../constants';
  
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
  

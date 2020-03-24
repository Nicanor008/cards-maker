import { combineReducers } from 'redux';
import cardsReducer, { fetchCardsReducer } from './cards';

const rootReducer = combineReducers({
  cardsReducer,
  fetchCardsReducer
});

export default rootReducer;
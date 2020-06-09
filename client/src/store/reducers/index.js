import { combineReducers } from 'redux';
import cardsReducer, { fetchCardsReducer } from './cards';
import loginReducer from './auth'

const rootReducer = combineReducers({
  cardsReducer,
  fetchCardsReducer,
  loginReducer
});

export default rootReducer;
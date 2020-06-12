import { combineReducers } from 'redux';
import cardsReducer, { userCards } from './cards';
import loginReducer from './auth'

const rootReducer = combineReducers({
  cardsReducer,
  userCards,
  loginReducer
});

export default rootReducer;
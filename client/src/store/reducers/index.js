import { combineReducers } from 'redux'
import cardsReducer, { userCards, fetchAllCards } from './cards'
import loginReducer from './auth'

const rootReducer = combineReducers({
    cardsReducer,
    userCards,
    loginReducer,
    fetchAllCards,
})

export default rootReducer

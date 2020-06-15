import { combineReducers } from 'redux'
import cardsReducer, { userCards, fetchAllCards, singleCard } from './cards'
import { searchByName, searchByTag } from './searchCards'
import loginReducer from './auth'

const rootReducer = combineReducers({
    cardsReducer,
    userCards,
    loginReducer,
    fetchAllCards,
    searchByName,
    searchByTag,
    singleCard,
})

export default rootReducer

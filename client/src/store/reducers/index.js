import { combineReducers } from 'redux'
import cardsReducer, { userCards, fetchAllCards, singleCard } from './cards'
import { searchByName, searchByTag } from './searchCards'
import loginReducer, { signup, forgotPassword } from './auth'

const rootReducer = combineReducers({
    cardsReducer,
    userCards,
    loginReducer,
    fetchAllCards,
    searchByName,
    searchByTag,
    singleCard,
    signup,
    forgotPassword,
})

export default rootReducer

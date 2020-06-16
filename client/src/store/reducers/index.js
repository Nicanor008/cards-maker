import { combineReducers } from 'redux'
import cardsReducer, {
    userCards,
    fetchAllCards,
    singleCard,
    deleteCard,
} from './cards'
import { searchByName, searchByTag } from './searchCards'
import loginReducer, {
    signup,
    forgotPassword,
    resetPassword,
    verifyAccount,
} from './auth'

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
    resetPassword,
    verifyAccount,
    deleteCard,
})

export default rootReducer

import { combineReducers } from 'redux'
import cardsReducer, {
    userCards,
    fetchAllCards,
    singleCard,
    updateCard,
    deleteCard
} from './cards'
import { searchByName, searchByTag } from './searchCards'
import loginReducer, {
    signup,
    forgotPassword,
    resetPassword,
    verifyAccount,
} from './auth'
import { fetchSingleUser, deactivateUser, deleteUser } from './user'

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
    updateCard,
    deleteCard,
    fetchSingleUser,
    deactivateUser,
    deleteUser,
})

export default rootReducer

import {
    FETCH_SINGLE_USER,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE,
} from '../constants'
import { initialState } from './cards'

export const fetchSingleUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SINGLE_USER:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case FETCH_SINGLE_USER_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

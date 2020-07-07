import {
    FETCH_SINGLE_USER,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE,
    DEACTIVATE_SINGLE_USER,
    DEACTIVATE_SINGLE_USER_FAILURE,
    DELETE_SINGLE_USER,
    DELETE_SINGLE_USER_SUCCESS,
    DELETE_SINGLE_USER_FAILURE,
    DEACTIVATE_SINGLE_USER_SUCCESS,
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


// DEACTIVATE USER ACCOUNT
export const deactivateUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case DEACTIVATE_SINGLE_USER:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case DEACTIVATE_SINGLE_USER_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case DEACTIVATE_SINGLE_USER_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}


// DELETE USER ACCOUNT
export const deleteUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_SINGLE_USER:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case DELETE_SINGLE_USER_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case DELETE_SINGLE_USER_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

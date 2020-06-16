import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from '../constants'

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export const initialState = {
    loading: false,
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

export default loginReducer


// signup reducer
export const signup = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

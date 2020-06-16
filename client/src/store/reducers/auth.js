import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
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

// forgot password
export const forgotPassword = (state = initialState, { type, payload }) => {
    switch (type) {
        case FORGOT_PASSWORD:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

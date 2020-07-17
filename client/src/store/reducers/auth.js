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
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    VERIFY_ACCOUNT,
    VERIFY_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT_FAILURE,
    GOOGLE_LOGIN,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,
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

// reset password
export const resetPassword = (state = initialState, { type, payload }) => {
    switch (type) {
        case RESET_PASSWORD:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}


// verify account
export const verifyAccount = (state = initialState, { type, payload }) => {
    switch (type) {
        case VERIFY_ACCOUNT:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case VERIFY_ACCOUNT_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

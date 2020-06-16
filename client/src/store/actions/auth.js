import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE
} from '../constants'

export const LoginRequest = (data) => ({
    type: LOGIN,
    payload: data,
})

export const LoginSuccessRequest = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
})

export const LoginFailureRequest = (data) => ({
    type: LOGIN_FAILURE,
    data,
})


// signup
export const signupRequest = (data) => ({
    type: SIGNUP,
    payload: data,
})

export const signupSuccessRequest = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data,
})

export const signupFailureRequest = (data) => ({
    type: SIGNUP_FAILURE,
    data,
})


export const forgotPasswordRequest = (data) => ({
    type: FORGOT_PASSWORD,
    payload: data,
})
export const forgotPasswordSuccessRequest = (data) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data,
})
export const forgotPasswordFailureRequest = (data) => ({
    type: FORGOT_PASSWORD_FAILURE,
    data,
})

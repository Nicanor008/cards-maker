import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
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

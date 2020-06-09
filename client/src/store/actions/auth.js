import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
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

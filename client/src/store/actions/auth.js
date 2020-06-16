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
    VERIFY_ACCOUNT_FAILURE
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

// forgot password
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

// reset password
export const ResetPasswordRequest = (data, email) => ({
    type: RESET_PASSWORD,
    payload: data,
    email
})
export const ResetPasswordSuccess = (data, email) => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
    email
})
export const ResetPasswordFailure = (data, email) => ({
    type: RESET_PASSWORD_FAILURE,
    data,
    email
})

// verify account / Activate account
export const VerifyAccountRequest = (data) => ({
    type: VERIFY_ACCOUNT,
    payload: data
})
export const VerifyAccountSuccess = (data) => ({
    type: VERIFY_ACCOUNT_SUCCESS,
    payload: data
})
export const VerifyAccountFailure = (data) => ({
    type: VERIFY_ACCOUNT_FAILURE,
    data
})

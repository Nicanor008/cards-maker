import {
    FETCH_SINGLE_USER,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE,
} from '../constants'

export const FetchSingleUserRequest = (data) => ({
    type: FETCH_SINGLE_USER,
    payload: data,
})

export const FetchSingleUserSuccess = (data) => ({
    type: FETCH_SINGLE_USER_SUCCESS,
    payload: data,
})

export const FetchSingleUserFailure = (data) => ({
    type: FETCH_SINGLE_USER_FAILURE,
    data,
})

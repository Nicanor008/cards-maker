import {
    FETCH_SINGLE_USER,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE,
    DELETE_SINGLE_USER,
    DELETE_SINGLE_USER_SUCCESS,
    DELETE_SINGLE_USER_FAILURE,
    DEACTIVATE_SINGLE_USER,
    DEACTIVATE_SINGLE_USER_FAILURE,
    DEACTIVATE_SINGLE_USER_SUCCESS,
} from '../constants'

// SINGLE USER
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


// DEACTIVATE USER ACCOUNT
export const DeactivateSingleUserRequest = (data) => ({
    type:  DEACTIVATE_SINGLE_USER,
    payload: data,
})

export const DeactivateSingleUserSuccess = (data) => ({
    type:  DEACTIVATE_SINGLE_USER_SUCCESS,
    payload: data,
})

export const DeactivateSingleUserFailure = (data) => ({
    type:  DEACTIVATE_SINGLE_USER_FAILURE,
    data,
})


// DELETE USER ACCOUNT
export const DeleteSingleUserRequest = (data) => ({
    type: DELETE_SINGLE_USER,
    payload: data,
})

export const DeleteSingleUserSuccess = (data) => ({
    type: DELETE_SINGLE_USER_SUCCESS,
    payload: data,
})

export const DeleteSingleUserFailure = (data) => ({
    type: DELETE_SINGLE_USER_FAILURE,
    data,
})

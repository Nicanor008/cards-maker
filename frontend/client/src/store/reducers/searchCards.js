import {
    SEARCH_BY_NAME,
    SEARCH_BY_NAME_SUCCESS,
    SEARCH_BY_NAME_FAILURE,
    SEARCH_BY_TAG,
    SEARCH_BY_TAG_SUCCESS,
    SEARCH_BY_TAG_FAILURE,
} from '../constants'
import { initialState } from './cards'

export const searchByName = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_BY_NAME:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case SEARCH_BY_NAME_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case SEARCH_BY_NAME_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

export const searchByTag = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_BY_TAG:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case SEARCH_BY_TAG_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case SEARCH_BY_TAG_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

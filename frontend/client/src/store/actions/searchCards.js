import {
    SEARCH_BY_NAME,
    SEARCH_BY_NAME_SUCCESS,
    SEARCH_BY_NAME_FAILURE,
    SEARCH_BY_TAG,
    SEARCH_BY_TAG_SUCCESS,
    SEARCH_BY_TAG_FAILURE,
} from '../constants'

// SEARCH CARDS BY NAME
export const SearchCardsByNameRequest = (data) => ({
    type: SEARCH_BY_NAME,
    payload: data,
})

export const SearchCardsByNameSuccess = (data) => ({
    type: SEARCH_BY_NAME_SUCCESS,
    payload: data,
})

export const SearchCardsByNameFailure = (data) => ({
    type: SEARCH_BY_NAME_FAILURE,
    data,
})

//   search cards by tag
export const SearchCardsByTagRequest = (data) => ({
    type: SEARCH_BY_TAG,
    payload: data,
})

export const SearchCardsByTagSuccess = (data) => ({
    type: SEARCH_BY_TAG_SUCCESS,
    payload: data,
})

export const SearchCardsByTagFailure = (data) => ({
    type: SEARCH_BY_TAG_FAILURE,
    data,
})

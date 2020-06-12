import {
    CARDS,
    CARDS_SUCCESS,
    CARDS_FAILURE,
    FETCH_CARDS,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,
    FETCH_USER_CARDS,
    FETCH_USER_CARDS_SUCCESS,
    FETCH_USER_CARDS_FAILURE,
} from '../constants'

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export const initialState = {
    loading: false,
}

const baseReducer = (
    state = initialState,
    { type, payload },
    request,
    success,
    error
) => {
    switch (type) {
        case request:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case success:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case error:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

const cardsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CARDS:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case CARDS_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case CARDS_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

export default cardsReducer

export const fetchAllCards = () => {
    return baseReducer(FETCH_CARDS, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE)
}

export const userCards = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_CARDS:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case FETCH_USER_CARDS_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case FETCH_USER_CARDS_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

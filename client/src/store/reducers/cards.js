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
    FETCH_SINGLE_CARD,
    FETCH_SINGLE_CARD_SUCCESS,
    FETCH_SINGLE_CARD_FAILURE,
    DELETE_CARD,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE,
    UPDATE_CARD,
    UPDATE_CARD_SUCCESS,
    UPDATE_CARD_FAILURE,
} from '../constants'

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export const initialState = {
    loading: false,
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

export const fetchAllCards = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CARDS:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case FETCH_CARDS_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
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

// fetch single cards
export const singleCard = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SINGLE_CARD:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case FETCH_SINGLE_CARD_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case FETCH_SINGLE_CARD_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

// update event card
export const updateCard = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_CARD:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case UPDATE_CARD_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case UPDATE_CARD_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

// delete event card
export const deleteCard = (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_CARD:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        case DELETE_CARD_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        case DELETE_CARD_FAILURE:
            return {
                ...state,
                ...payload,
                loading: false,
            }
        default:
            return state
    }
}

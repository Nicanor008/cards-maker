import {
    CARDS, CARDS_SUCCESS, CARDS_FAILURE
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

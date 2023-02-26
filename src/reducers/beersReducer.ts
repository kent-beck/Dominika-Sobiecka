import {Beer, Action, State} from '../types/beersTypes';

const initialState: State = {
    beers: [],
    loading: false,
    error: null,
};

export const beersReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'FETCH_BEERS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_BEERS_SUCCESS':
            return {
                ...state,
                beers: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_BEERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

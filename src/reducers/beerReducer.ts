import {Beer} from '../types/beersTypes';
import {ActionTypes} from '../actions/beerActions';

export interface State {
    beer: Beer | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    beer: null,
    loading: false,
    error: null,
};

export const beerReducer = (state: State = initialState, action: any): State => {
    switch (action.type) {
        case ActionTypes.FETCH_BEER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.FETCH_BEER_SUCCESS:
            return {
                ...state,
                beer: action.payload,
                loading: false,
                error: null,
            };
        case ActionTypes.FETCH_BEER_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};

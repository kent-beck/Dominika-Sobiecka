import axios from 'axios';
import {Beer} from '../types/beersTypes';

export const SEARCH_BEERS_REQUEST = 'SEARCH_BEERS_REQUEST';
export const SEARCH_BEERS_SUCCESS = 'SEARCH_BEERS_SUCCESS';
export const SEARCH_BEERS_FAILURE = 'SEARCH_BEERS_FAILURE';

interface SearchBeersRequestAction {
    type: typeof SEARCH_BEERS_REQUEST;
}

interface SearchBeersSuccessAction {
    type: typeof SEARCH_BEERS_SUCCESS;
    payload: Beer[];
}

interface SearchBeersFailureAction {
    type: typeof SEARCH_BEERS_FAILURE;
    error: string;
}

export type SearchActions =
    | SearchBeersRequestAction
    | SearchBeersSuccessAction
    | SearchBeersFailureAction;

export const searchBeersRequest = (): SearchBeersRequestAction => ({
    type: SEARCH_BEERS_REQUEST,
});

export const searchBeersSuccess = (data: Beer[]): SearchBeersSuccessAction => ({
    type: SEARCH_BEERS_SUCCESS,
    payload: data,
});

export const searchBeersFailure = (error: string): SearchBeersFailureAction => ({
    type: SEARCH_BEERS_FAILURE,
    error,
});

export const searchBeers = (searchTerm: string) => {
    return async (dispatch: any) => {
        dispatch(searchBeersRequest());
        try {
            const response = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
            dispatch(searchBeersSuccess(response.data));
        } catch (error: any) {
            const errorMessage = typeof error === 'string' ? error : 'An error occurred while searching for beers';
            dispatch(searchBeersFailure(errorMessage));
        }
    };
};


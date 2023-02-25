import axios from 'axios';
import {Dispatch} from 'redux';
import {Beer} from '../types/types';

export enum ActionTypes {
    FETCH_BEERS_REQUEST = 'FETCH_BEERS_REQUEST',
    FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS',
    FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE',
}

export interface FetchBeersRequestAction {
    type: ActionTypes.FETCH_BEERS_REQUEST;
}

export interface FetchBeersSuccessAction {
    type: ActionTypes.FETCH_BEERS_SUCCESS;
    payload: Beer[];
}

export interface FetchBeersFailureAction {
    type: ActionTypes.FETCH_BEERS_FAILURE;
    error: string;
}

export const fetchBeers = (page: number, perPage: number) => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
    return async (dispatch: Dispatch) => {
        dispatch<FetchBeersRequestAction>({type: ActionTypes.FETCH_BEERS_REQUEST});

        try {
            const response = await axios.get(url);
            const beers = response.data;

            dispatch<FetchBeersSuccessAction>({
                type: ActionTypes.FETCH_BEERS_SUCCESS,
                payload: beers,
            });
        } catch (error: any) {
            dispatch<FetchBeersFailureAction>({
                type: ActionTypes.FETCH_BEERS_FAILURE,
                error: error.message,
            });
        }
    };
};

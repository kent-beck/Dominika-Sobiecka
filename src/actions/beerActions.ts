import axios from 'axios';
import {Dispatch} from 'redux';
import {Beer} from '../types/beersTypes';

export enum ActionTypes {
    FETCH_BEER_REQUEST = 'FETCH_BEER_REQUEST',
    FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS',
    FETCH_BEER_FAILURE = 'FETCH_BEER_FAILURE',
}

export interface FetchBeerRequestAction {
    type: ActionTypes.FETCH_BEER_REQUEST;
}

export interface FetchBeerSuccessAction {
    type: ActionTypes.FETCH_BEER_SUCCESS;
    payload: Beer;
}

export interface FetchBeerFailureAction {
    type: ActionTypes.FETCH_BEER_FAILURE;
    error: string;
}

export const fetchBeer = (id: number) => {
    const url = `https://api.punkapi.com/v2/beers/${id}`;
    return async (dispatch: Dispatch) => {
        dispatch<FetchBeerRequestAction>({type: ActionTypes.FETCH_BEER_REQUEST});

        try {
            const response = await axios.get(url);
            const beer = response.data[0];

            dispatch<FetchBeerSuccessAction>({
                type: ActionTypes.FETCH_BEER_SUCCESS,
                payload: beer,
            });
        } catch (error: any) {
            dispatch<FetchBeerFailureAction>({
                type: ActionTypes.FETCH_BEER_FAILURE,
                error: error.message,
            });
        }
    };
};

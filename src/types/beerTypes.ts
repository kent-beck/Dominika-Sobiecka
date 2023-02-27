export interface Beer {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    ebc: number;
    food_pairing: string[];
}

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


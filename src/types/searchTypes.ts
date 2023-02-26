export interface SearchState {
    searchTerm: string;
    searchResults: any[];
}

export enum SearchActionTypes {
    SET_SEARCH_TERM = "SET_SEARCH_TERM",
    SEARCH_BEERS_REQUEST = "SEARCH_BEERS_REQUEST",
}

export interface SetSearchTermAction {
    type: SearchActionTypes.SET_SEARCH_TERM;
    payload: string;
}

export interface SearchBeersRequestAction {
    type: SearchActionTypes.SEARCH_BEERS_REQUEST;
}

export type SearchAction = SetSearchTermAction | SearchBeersRequestAction;

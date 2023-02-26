export interface SearchState {
    searchTerm: string;
}

export enum SearchActionTypes {
    SET_SEARCH_TERM = "SET_SEARCH_TERM",
}

export interface SetSearchTermAction {
    type: SearchActionTypes.SET_SEARCH_TERM;
    payload: string;
}

export type SearchAction = SetSearchTermAction;

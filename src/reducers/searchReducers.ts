import {SearchActionTypes, SearchState, SearchAction} from "../types/searchTypes";

const initialState: SearchState = {
    searchTerm: "",
    searchResults: [],
};

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        case SearchActionTypes.SEARCH_BEERS_REQUEST:
            return {
                ...state,
                searchResults: [],
            };
        default:
            return state;
    }
};

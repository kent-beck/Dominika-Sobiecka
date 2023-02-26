import {SearchActionTypes, SearchState, SearchAction} from "../types/searchTypes";

const initialState: SearchState = {
    searchTerm: "",
};

export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;

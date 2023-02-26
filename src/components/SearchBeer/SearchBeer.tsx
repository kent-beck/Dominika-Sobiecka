import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchBeersRequest} from "../../actions/searchActions";
import {SetSearchTermAction, SearchActionTypes} from "../../types/searchTypes";
import {Search} from "./SearchBeer.styled";

const SearchBeer: React.FC = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: any) => state.searchReducer.searchTerm);

    const onSearchClick = () => {
        dispatch(searchBeersRequest());
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action: SetSearchTermAction = {
            type: SearchActionTypes.SET_SEARCH_TERM,
            payload: e.target.value,
        };
        dispatch(action);
    };

    return (
        <Search>
            <input type="text" value={searchTerm} onChange={onInputChange}/>
            <button onClick={onSearchClick}>Search</button>
        </Search>
    );
};

export default SearchBeer;

import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchBeersRequest} from "../../actions/searchActions";
import {SetSearchTermAction, SearchActionTypes} from "../../types/searchTypes";
import {Search} from "./SearchBeer.styled";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const SearchBeer: React.FC<Props> = ({onSearch}) => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: any) => state.searchReducer.searchTerm);
    const [inputValue, setInputValue] = useState("");

    const onSearchClick = () => {
        onSearch(inputValue);
        dispatch(searchBeersRequest());
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const action: SetSearchTermAction = {
            type: SearchActionTypes.SET_SEARCH_TERM,
            payload: value,
        };
        dispatch(action);
    };

    return (
        <Search>
            <input type="text" value={inputValue} onChange={onInputChange}/>
            <button onClick={onSearchClick}>Search</button>
        </Search>
    );
};

export default SearchBeer;

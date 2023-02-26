import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {beersReducer} from './reducers/beersReducer';
import searchReducer from "./reducers/searchReducers";

const rootReducer = combineReducers({
    beersReducer,
    searchReducer,
});

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

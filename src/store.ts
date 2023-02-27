import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {beersReducer} from './reducers/beersReducer';
import {searchReducer} from "./reducers/searchReducers";
import {beerReducer} from "./reducers/beerReducer";
import {cartReducer} from "./reducers/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    beersReducer,
    searchReducer,
    beerReducer,
    cartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

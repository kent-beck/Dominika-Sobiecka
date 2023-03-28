import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {beersReducer} from './reducers/beersReducer';
import {searchReducer} from './reducers/searchReducers';
import {beerReducer} from './reducers/beerReducer';
import {cartReducer} from './reducers/cartReducer';

const rootReducer = combineReducers({
    beersReducer,
    searchReducer,
    beerReducer,
    cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

export default configureStore();

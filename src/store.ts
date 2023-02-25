import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../src/reducers/reducer';

export const configureStore = () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    return store;
};

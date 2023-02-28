import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import DataTable from './DataTable';
import {beersReducer} from '../../reducers/beersReducer';
import {fetchBeers} from '../../actions/beersActions';
import {MockStoreEnhanced} from 'redux-mock-store';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('DataTable', () => {
    let store: MockStoreEnhanced<unknown, {}>;
    let initialState: { beersReducer: { beers: [], loading: false, error: null } };

    beforeEach(() => {
        initialState = {
            beersReducer: {
                beers: [],
                loading: false,
                error: null,
            },
        };
        store = configureStore()(initialState);
    });

    test('should render component properly', () => {
        render(
            <Provider store={store}>
                <DataTable/>
            </Provider>
        );

        expect(screen.getByText('Search Beer')).toBeInTheDocument();
        expect(screen.getByText('Beers')).toBeInTheDocument();
    });

    test('should handle search', () => {
        const searchTerm = 'IPA';
        const spyFetchBeers = jest.spyOn(require('../../actions/beersActions'), 'fetchBeers');

        render(
            <Provider store={store}>
                <DataTable/>
            </Provider>
        );

        const input = screen.getByRole('textbox', {name: 'Search beer'});
        const button = screen.getByRole('button', {name: 'Search'});

        fireEvent.change(input, {target: {value: searchTerm}});
        fireEvent.click(button);

        expect(spyFetchBeers).toHaveBeenCalledWith(1, 10, searchTerm);
    });

    test('should handle next page', async () => {
        const spyFetchBeers = jest.spyOn(require('../../actions/beersActions'), 'fetchBeers');

        render(
            <Provider store={store}>
                <DataTable/>
            </Provider>
        );

        const button = screen.getByRole('button', {name: 'Next'});
        fireEvent.click(button);

        await waitFor(() =>
            expect(spyFetchBeers).toHaveBeenCalledWith(2, 10, '')
        );
    });

    test('should handle previous page', async () => {
        const spyFetchBeers = jest.spyOn(require('../../actions/beersActions'), 'fetchBeers');

        render(
            <Provider store={store}>
                <DataTable/>
            </Provider>
        );

        const button = screen.getByRole('button', {name: 'Prev'});
        fireEvent.click(button);

        await waitFor(() =>
            expect(spyFetchBeers).toHaveBeenCalledWith(1, 10, '')
        );
    });
});

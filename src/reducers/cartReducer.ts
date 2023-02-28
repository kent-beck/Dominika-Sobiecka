import {CartActionTypes, CartState} from '../types/cartTypes';

const initialState: CartState = {
    items: [],
};

export const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload.item],
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        case CartActionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
                ),
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

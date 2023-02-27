import {Beer} from "../types/beerTypes";

export enum ActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

export interface CartItem {
    beer: Beer;
    quantity: number;
}

export interface AddToCartAction {
    type: ActionTypes.ADD_TO_CART;
    payload: CartItem;
}

export interface RemoveFromCartAction {
    type: ActionTypes.REMOVE_FROM_CART;
    payload: {
        id: number;
    };
}

export interface UpdateQuantityAction {
    type: ActionTypes.UPDATE_QUANTITY;
    payload: {
        id: number;
        quantity: number;
    };
}

export const addToCart = (beer: Beer, quantity: number): AddToCartAction => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            beer: {
                ...beer,
                food_pairing: [],
            },
            quantity,
        },
    };
};


export const removeFromCart = (id: number): RemoveFromCartAction => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
        id,
    },
});

export const updateQuantity = (
    id: number,
    quantity: number
): UpdateQuantityAction => ({
    type: ActionTypes.UPDATE_QUANTITY,
    payload: {
        id,
        quantity,
    },
});

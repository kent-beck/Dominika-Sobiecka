import {Beer} from "../types/beersTypes";
import {CartItem, CartActionTypes} from "../types/cartTypes";

export interface AddToCartAction {
    type: CartActionTypes.ADD_ITEM;
    payload: {
        item: CartItem;
    };
}

export interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_ITEM;
    payload: {
        id: number;
    };
}

export interface UpdateQuantityAction {
    type: CartActionTypes.UPDATE_QUANTITY;
    payload: {
        id: number;
        quantity: number;
    };
}

export interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART;
}

export const addToCart = (beer: Beer, quantity: number, cart: CartItem[]): AddToCartAction => {
    const newItem: CartItem = {
        id: Date.now(),
        beer: {
            ...beer,
        },
        quantity,
    };

    return {
        type: CartActionTypes.ADD_ITEM,
        payload: {
            item: newItem,
        },
    };
};


export const removeFromCart = (id: number): RemoveFromCartAction => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
        id,
    },
});

export const updateQuantity = (
    id: number,
    quantity: number
): UpdateQuantityAction => ({
    type: CartActionTypes.UPDATE_QUANTITY,
    payload: {
        id,
        quantity,
    },
});

export const clearCart = (): ClearCartAction => ({
    type: CartActionTypes.CLEAR_CART,
});

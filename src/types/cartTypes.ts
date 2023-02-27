import {Beer} from "./beersTypes";

export interface CartItem {
    id: number;
    beer: Beer;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export enum CartActionTypes {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    UPDATE_QUANTITY = "UPDATE_QUANTITY",
    CLEAR_CART = "CLEAR_CART",
}

export interface AddItemAction {
    type: CartActionTypes.ADD_ITEM;
    payload: {
        item: CartItem;
    };
}

export interface RemoveItemAction {
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

export type CartAction =
    | AddItemAction
    | RemoveItemAction
    | UpdateQuantityAction
    | ClearCartAction;

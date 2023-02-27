import {
    ActionTypes,
    AddToCartAction,
    CartItem,
    RemoveFromCartAction,
    UpdateQuantityAction
} from "../actions/cartAction";

export interface State {
    cart: CartItem[];
}

const initialState: State = {
    cart: []
};

export const cartReducer = (state: State = initialState, action: AddToCartAction | RemoveFromCartAction | UpdateQuantityAction): State => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            console.log('Added beer to cart:', action.payload);
            const existingItem = state.cart.find((item) => item.beer.id === action.payload.beer.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.beer.id === action.payload.beer.id
                            ? {...item, quantity: item.quantity + action.payload.quantity}
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {beer: action.payload.beer, quantity: action.payload.quantity}],
                };
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.beer.id !== action.payload.id),
            };
        case ActionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.beer.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
                ),
            };
        default:
            return state;
    }
};

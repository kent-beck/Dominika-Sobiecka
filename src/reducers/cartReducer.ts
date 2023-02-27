import {ActionTypes, AddToCartAction, CartItem, RemoveFromCartAction, UpdateQuantityAction} from "../actions/cartAction";

export interface State {
    cart: CartItem[];
}

const initialState: State = {
    cart: []
};

const cartReducer = (state: State = initialState, action: AddToCartAction | RemoveFromCartAction | UpdateQuantityAction): State => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const existingItem = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.product.id === action.payload.product.id
                            ? {...item, quantity: item.quantity + action.payload.quantity}
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {product: action.payload.product, quantity: action.payload.quantity}],
                };
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.product.id !== action.payload.id),
            };
        case ActionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Beer} from "../../types/beersTypes";
import {addToCart} from "../../actions/cartAction";

interface Props {
    beer: Beer;
}

const CartButton: React.FC<Props> = ({beer}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartReducer.cart);

    const handleAddToCart = () => {
        dispatch(addToCart(beer, 1, cart));
        console.log(beer)
    };

    return (
        <button onClick={handleAddToCart}>Add to Cart</button>
    );
};

export default CartButton;

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {CartItem} from "../../types/cartTypes";
import {removeFromCart, updateQuantity} from "../../actions/cartAction";
import {useParams} from "react-router-dom";
import {Beer} from "../../types/beersTypes";

interface Props {
    beer?: Beer;
}

const Cart: React.FC<Props> = () => {
    const {beerId} = useParams<{ beerId: string }>();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) =>
        state.cartReducer.cartItems.filter((item: CartItem) => item.beer.id === Number(beerId))
    );

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity(id, quantity));
    };

    const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
        return acc + item.beer.srm * item.quantity;
    }, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item: CartItem) => (
                <div key={item.id}>
                    <h3>{item.beer.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.beer.srm * item.quantity}</p>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                            handleUpdateQuantity(item.id, parseInt(e.target.value))
                        }
                    />
                </div>
            ))}
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;

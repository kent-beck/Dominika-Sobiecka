import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {CartItem} from "../../types/cartTypes";
import {removeFromCart, updateQuantity} from "../../actions/cartAction";
import {Beer} from "../../types/beersTypes";
import BeerBubbles from "../UI/BeerBubbles/BeerBubbles";
import {BeerTitle} from "../UI/BeerTitle/BeerTitle.styled";
import {ShopTable, Table, Summary, WrapperCart} from "./Cart.styled";

interface Props {
    beer?: Beer;
}

const Cart: React.FC<Props> = ({beer}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => {
        console.log('Cart items:', state.cartReducer.items);
        return state.cartReducer.items ?? [];
    });

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
            <BeerBubbles/>
            <BeerTitle>Crazy Beers</BeerTitle>
            <WrapperCart>
                {cartItems && cartItems.length > 0 ? (
                    cartItems
                        .filter((item: CartItem) => !beer || item.beer.id === beer.id)
                        .map((item: CartItem) => (
                            <ShopTable key={item.id}>
                                {item.beer && (
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>

                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Quantity
                                            </th>
                                            <th>
                                                Price
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img src={item.beer.image_url} alt={item.beer.name}/>
                                            </td>
                                            <td>
                                                {item.beer.name}
                                            </td>
                                            <td>
                                                {item.quantity}
                                            </td>
                                            <td>
                                                ${item.beer.srm * item.quantity}
                                            </td>
                                        </tr>
                                        </tbody>

                                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) =>
                                                handleUpdateQuantity(item.id, parseInt(e.target.value))
                                            }
                                        />
                                    </Table>
                                )}
                            </ShopTable>
                        ))
                ) : (
                    <div>No items in cart</div>
                )}
                <Summary>
                    <h3>Cart Summary</h3>
                    <p>Total Price: ${totalPrice}</p>
                </Summary>

            </WrapperCart>

        </div>
    );
};

export default Cart;












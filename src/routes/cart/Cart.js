import React from 'react';
import {getCart} from "./cartDAO";
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = getCart();
    const totalPrice = cart.products.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    <table className="table">
                        <thead className="thead-light text-center">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.products.map(cartItem => <CartItem cartItem={cartItem}/>)}
                        <tr>
                            <td colSpan="5" className="text-right">
                                {totalPrice} €
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const CartItem = ({cartItem}) => {
    const totalItemPrice = (cartItem.product.price * cartItem.quantity).toFixed(2);

    return (
        <tr className="text-center cart-item">
            <td><Link to={`/products/${cartItem.product.id}`}><img src={cartItem.product.imageUrl}/></Link></td>
            <td className="align-middle">{cartItem.product.name}</td>
            <td className="align-middle text-right">{cartItem.product.price} €</td>
            <td className="align-middle">{cartItem.quantity}</td>
            <td className="align-middle text-right">{totalItemPrice} €</td>
        </tr>
    );
};

export {Cart};
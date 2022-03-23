import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let price = 0;
    let shippingPrice = 0;
    let quantity = 0;

    for (const product of cart) {
        shippingPrice += product.shipping;
        quantity += product.quantity;
        price += product.price * quantity;
    }

    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + shippingPrice + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>
                Selected Item: {quantity}
            </p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Price: ${shippingPrice}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>
                No. Of Product: {cart.length}
            </p>
        </div>
    );
};

export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../CustomHooks/useCart';
// import useProducts from '../../CustomHooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    const removeItemFromCart = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop'>
            <div className='order-items-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product._id}
                        removeItemFromCart={removeItemFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button>
                        <Link to={'/shipping'}>Proceed Checkout</Link >
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
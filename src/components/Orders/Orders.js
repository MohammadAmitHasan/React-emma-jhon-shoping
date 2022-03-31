import React from 'react';
import useCart from '../../CustomHooks/useCart';
import useProducts from '../../CustomHooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeItemFromCart = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    }

    return (
        <div className='shop'>
            <div className='order-items-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        removeItemFromCart={removeItemFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
import React from 'react';
import useCart from '../../CustomHooks/useCart';
import useProducts from '../../CustomHooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>All Products: {products.length}</h2>
            <h2>All cart products: {cart.length}</h2>
        </div>
    );
};

export default Orders;
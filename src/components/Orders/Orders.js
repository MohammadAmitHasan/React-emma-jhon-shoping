import React from 'react';
import useProducts from '../../CustomHooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>All Orders: {products.length}</h2>

        </div>
    );
};

export default Orders;
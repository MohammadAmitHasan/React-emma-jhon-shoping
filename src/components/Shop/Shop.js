import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const [cart, setCart] = useState([]);

    // Cart event handler
    const addToCartHandler = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        products={product}
                        key={product.id}
                        addToCartHandler={addToCartHandler}
                    ></Product>)
                }
            </div>

            <div className="cart">
                <h5>Order Summary</h5>
                <p>
                    No. Of Product: {cart.length}
                </p>
            </div>
        </div>
    );
};

export default Shop;
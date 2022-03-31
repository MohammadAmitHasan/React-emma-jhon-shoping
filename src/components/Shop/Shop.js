import React, { useEffect, useState } from 'react';
import useProducts from '../../CustomHooks/useProducts';
import { addToDb, getDataFromDB } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    // Handle effect for loading data from local storage
    useEffect(() => {
        // Load data from local storage
        const loadedData = getDataFromDB();
        const newProductList = [];

        for (const id in loadedData) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                addedProduct.quantity = loadedData[id];
                newProductList.push(addedProduct);
            }
        }
        setCart(newProductList);
        // console.log(newProductList)
    }, [products])
    // Setting the dependency as products means when the state of product will change this will be called again


    // Cart event handler
    const addToCartHandler = (product) => {
        let newCart = [];
        // console.log(product);
        const existingProduct = cart.find(cartProduct => cartProduct.id === product.id);
        if (existingProduct) {
            product.quantity += 1;
            const restProducts = cart.filter(cartProduct => cartProduct.id !== product.id);
            newCart = [...restProducts, product];
        }
        else {
            product.quantity += 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.id);
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

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
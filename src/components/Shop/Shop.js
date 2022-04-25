import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../CustomHooks/useCart';
import { addToDb, getDataFromDB } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    let navigate = useNavigate();

    const [cart, setCart] = useCart();

    const [activePage, setActivePage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [size, setSize] = useState(10);

    // Load no of available products
    useEffect(() => {
        fetch('http://localhost:5000/totalProducts')
            .then(res => res.json())
            .then(data => {
                const totalProducts = data.totalProducts;
                const page = Math.ceil(totalProducts / size)
                setPageCount(page);
            })
    }, [size])

    // Load Products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Send request with page no. & Product per page no.
        fetch(`http://localhost:5000/products?activePage=${activePage}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [size, activePage])



    // Handle effect for loading data from local storage
    // useEffect(() => {
    //     // Load data from local storage
    //     const loadedData = getDataFromDB();
    //     const newProductList = [];

    //     for (const id in loadedData) {
    //         const addedProduct = products.find(product => product._id === id);

    //         if (addedProduct) {
    //             addedProduct.quantity = loadedData[id];
    //             newProductList.push(addedProduct);
    //         }
    //     }
    //     setCart(newProductList);
    //     // console.log(newProductList)
    // }, [products])
    // Setting the dependency as products means when the state of product will change this will be called again


    // Cart event handler
    const addToCartHandler = (product) => {
        let newCart = [];
        // console.log(product);
        const existingProduct = cart.find(cartProduct => cartProduct._id === product._id);
        if (existingProduct) {
            product.quantity += 1;
            const restProducts = cart.filter(cartProduct => cartProduct._id !== product._id);
            newCart = [...restProducts, product];
        }
        else {
            product.quantity += 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    return (
        <div className='shop'>
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h4>Display Products Per Page
                        <select style={{ fontSize: '15px', marginLeft: '10px' }} onChange={e => setSize(e.target.value)}>
                            <option value="5">5</option>
                            <option selected value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </h4>
                </div>

                <div className="product-container">
                    {
                        products.map(product => <Product
                            products={product}
                            key={product._id}
                            addToCartHandler={addToCartHandler}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={activePage === number ? 'active' : ''}
                                onClick={() => setActivePage(number)}>{number + 1}</button>)
                    }

                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/orders')}>Review Order</button>
                </Cart>
            </div>
        </div >

    );
};

export default Shop;
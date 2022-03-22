import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ addToCartHandler, products }) => {

    const { img, name, price, seller, ratings } = products;

    return (
        <div className='product'>
            <img src={img} alt="product's" />

            <div className='product-info'>
                <h6>{name}</h6>
                <p>
                    Price: {price}
                </p>
                <p>
                    <small>Manufacturer: {seller}</small> <br />
                    <small>Rating: {ratings} start</small>
                </p>
            </div>
            <button onClick={() => addToCartHandler(products)} className='add-cart-btn'>
                Add To Cart
                <span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </span>
            </button>
        </div>
    );
};

export default Product;
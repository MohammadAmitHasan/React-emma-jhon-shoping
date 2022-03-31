import React from 'react';
import './ReviewItem.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({ product, removeItemFromCart }) => {
    const { name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div className='review-img-container'>
                <img src={img} alt="" />
            </div>
            <div className='item-details-container'>
                <div>
                    <h4 title={name}>
                        {/* {name.length > 20 ? name.slice(0, 20) + '...' : name} */}
                        {name}
                    </h4>
                    <p>Price: <span className='value'>${price}</span></p>
                    <p>
                        Shipping Charge: <span className='value'>${shipping}</span>
                    </p>
                    <p>
                        Quantity: {quantity}
                    </p>
                </div>
                <div>
                    <button onClick={() => removeItemFromCart(product)} className='delete-icon'><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
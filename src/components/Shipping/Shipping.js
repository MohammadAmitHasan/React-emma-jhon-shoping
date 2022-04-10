import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../config.init';

const Shipping = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [user] = useAuthState(auth);

    // const navigate = useNavigate();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleAddress = e => {
        setAddress(e.target.value);
    }
    const handlePhone = e => {
        setPhone(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const shippingInfo = { name, address, phone, email: user?.email }
        console.log(shippingInfo);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Shipping Information</h3>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="name" placeholder='Your Name' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user?.email} readOnly required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="address" placeholder='Provide your address' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="phone-number" placeholder='Your phone number' required />
                    </div>

                    <input className='form-submit-btn' type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
};

export default Shipping;
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
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddress} type="password" name="password" id="password" placeholder='Type your password' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="phone-number" placeholder='Your phone number' required />
                    </div>

                    <input className='form-submit-btn' type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
};

export default Shipping;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../config.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='navigation-bar'>
            <img src={logo} alt="logo" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory" > Inventory</Link >
                <Link to="/about" > About</Link >
                <Link to="/login">Login</Link>
                {
                    user && <button onClick={() => signOut(auth)}>Logout</button>
                }
            </div >
        </nav >
    );
};

export default Header; <h2>Header</h2>
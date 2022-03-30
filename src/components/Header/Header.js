import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navigation-bar'>
            <img src={logo} alt="logo" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory" > Inventory</Link >
                <Link to="/about" > About</Link >
            </div >
        </nav >
    );
};

export default Header; <h2>Header</h2>
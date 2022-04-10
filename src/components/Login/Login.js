import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your Email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="email" name="password" id="" placeholder='Type your password' />
                    </div>
                    <input className='form-submit-btn' type="submit" value="Login" />
                </form>
                <p>Don't have an account.? <Link className='form-toggle' to='/signup'>click to signup</Link> </p>
            </div>
        </div>
    );
};

export default Login;
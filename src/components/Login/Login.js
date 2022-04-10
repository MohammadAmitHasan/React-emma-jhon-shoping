import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleLogo from '../../images/google.png'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="email" name="password" id="" placeholder='Type your password' required />
                    </div>
                    <input className='form-submit-btn' type="submit" value="Login" />
                </form>
                <p>Don't have an account.? <Link className='form-toggle' to='/signup'>click to signup</Link> </p>

                <div className='special-separator'>
                    <div>
                        <hr />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        OR
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>

                <button className='google-sign-in-btn'>
                    <img src={googleLogo} alt="" />
                    <span>Sign In With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
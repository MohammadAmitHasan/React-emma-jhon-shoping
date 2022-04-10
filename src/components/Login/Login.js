import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleLogo from '../../images/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../config.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                {
                    error && <p className='error-msg'>
                        {error.message}
                    </p>
                }{
                    loading && <p>Loading ....</p>
                }
                <form onSubmit={handleLoginSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="email" placeholder='Your Email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="password" placeholder='Type your password' required />
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
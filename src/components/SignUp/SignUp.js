import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../config.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [localError, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords did not match.');
            return
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>

                {
                    localError && <p className='error-msg'>
                        {localError}
                    </p>
                }

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="email" placeholder='Your Email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="password" placeholder='Type your password' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" id="confirm-password" placeholder='Type your password again' required />
                    </div>

                    <input className='form-submit-btn' type="submit" value="Login" />
                </form>
                <p>Already have an account.? <Link className='form-toggle' to='/login'>Login</Link> </p>

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

export default SignUp;
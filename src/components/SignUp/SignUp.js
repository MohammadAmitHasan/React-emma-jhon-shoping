import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.png'

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your Email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="email" name="password" id="" placeholder='Type your password' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="email" name="password" id="" placeholder='Type your password again' required />
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
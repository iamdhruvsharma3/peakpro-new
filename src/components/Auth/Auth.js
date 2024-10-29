// src/components/Auth/Auth.js
import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchModeHandler = () => {
        setIsLogin((prevMode) => !prevMode);
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">{isLogin ? 'Login to PeakPro' : 'Sign Up for PeakPro'}</h2>
            <form className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                    </div>
                )}
                <button type="submit" className="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
                <div className="switch-mode">
                    <p>{isLogin ? "Don't have an account?" : 'Already have an account?'}</p>
                    <button type="button" className="switch-btn" onClick={switchModeHandler}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;

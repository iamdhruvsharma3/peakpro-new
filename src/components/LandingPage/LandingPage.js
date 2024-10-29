// src/components/LandingPage/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">Achieve Your Peak</h1>
                <p className="landing-description">
                    Welcome to PeakPro, your personal fitness tracker designed to help you log workouts,
                    monitor nutrition, and analyze progress. Join us today and take your fitness journey to the next level!
                </p>
                <div className="landing-buttons">
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                    <a href="/login" className="btn btn-secondary">Login</a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

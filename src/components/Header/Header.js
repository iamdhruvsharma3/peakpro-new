// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src= { logo } alt="PeakPro Logo" className="logo-image" />
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/workout-logger" className="nav-link">Workout Logger</Link>
                <Link to="/nutrition-logger" className="nav-link">Nutrition Logger</Link>
                <Link to="/features" className="nav-link">Features</Link>
                <Link to="/analytics" className="nav-link">Analytics</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
        </header>
    );
};

export default Header;

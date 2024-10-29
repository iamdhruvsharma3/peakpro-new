// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import './index.css'; // Import global styles
import reportWebVitals from './reportWebVitals'; // Optional for performance reporting

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
    <React.StrictMode>
        <App /> {/* Render the App component */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

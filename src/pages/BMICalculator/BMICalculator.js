import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = (event) => {
        event.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
            setBmi(calculatedBMI);
            // Determine BMI category
            if (calculatedBMI < 18.5) {
                setCategory('Underweight');
            } else if (calculatedBMI < 24.9) {
                setCategory('Normal weight');
            } else if (calculatedBMI < 29.9) {
                setCategory('Overweight');
            } else {
                setCategory('Obesity');
            }
        }
    };

    return (
        <div className="bmi-calculator-container">
            <h2 className="bmi-title">BMI Calculator</h2>
            <form className="bmi-form" onSubmit={calculateBMI}>
                <div className="form-group">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height"
                        required
                    />
                </div>
                <button type="submit" className="btn">Calculate BMI</button>
            </form>
            {bmi && (
                <div className="bmi-result">
                    <h3>Your BMI: {bmi}</h3>
                    <p>Category: {category}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;

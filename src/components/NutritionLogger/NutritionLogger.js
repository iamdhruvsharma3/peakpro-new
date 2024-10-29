// src/components/NutritionLogger/NutritionLogger.js
import React, { useState } from 'react';
import './NutritionLogger.css';

const NutritionLogger = () => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const [nutrients, setNutrients] = useState('');
    const [log, setLog] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (food && calories && nutrients) {
            setLog([...log, { food, calories, nutrients }]);
            setFood('');
            setCalories('');
            setNutrients('');
        }
    };

    return (
        <div className="nutrition-logger-container">
            <h2 className="nutrition-logger-title">Log Your Nutrition</h2>
            <form className="nutrition-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Food Item (e.g., Apple)" 
                    value={food} 
                    onChange={(e) => setFood(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Calories (kcal)" 
                    value={calories} 
                    onChange={(e) => setCalories(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Nutritional Info (e.g., Carbs, Protein)" 
                    value={nutrients} 
                    onChange={(e) => setNutrients(e.target.value)} 
                    required 
                />
                <button type="submit" className="log-button">Log Nutrition</button>
            </form>
            <div className="nutrition-log">
                <h3 className="recent-title">Recent Entries</h3>
                <ul>
                    {log.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.food}</strong> - {entry.calories} kcal - {entry.nutrients}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NutritionLogger;

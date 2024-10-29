// src/pages/NutritionTracker/NutritionTracker.js
import React from 'react';
import './NutritionTracker.css';

const mealsData = [
    {
        title: 'Breakfast',
        description: 'Start your day with a healthy breakfast to fuel your body.',
        icon: '🍳'
    },
    {
        title: 'Lunch',
        description: 'A balanced lunch to keep you energized throughout the day.',
        icon: '🥗'
    },
    {
        title: 'Dinner',
        description: 'Enjoy a nutritious dinner to end your day on a healthy note.',
        icon: '🍽️'
    },
    {
        title: 'Snacks',
        description: 'Healthy snacks to curb your hunger between meals.',
        icon: '🍎'
    },
    {
        title: 'Hydration',
        description: 'Stay hydrated with plenty of water throughout the day.',
        icon: '💧'
    },
    {
        title: 'Supplements',
        description: 'Consider taking supplements for added nutrition.',
        icon: '💊'
    }
];

const NutritionTracker = () => {
    return (
        <div className="nutrition-tracker-container">
            <h2 className="nutrition-tracker-title">Nutrition Tracker</h2>
            <p className="nutrition-tracker-description">
                Log your meals and keep track of daily caloric intake!
            </p>
            <div className="nutrition-tracker-content">
                {mealsData.map((meal, index) => (
                    <div className="meal-card" key={index}>
                        <span className="meal-icon">{meal.icon}</span>
                        <h3 className="meal-card-title">{meal.title}</h3>
                        <p className="meal-card-description">{meal.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NutritionTracker;

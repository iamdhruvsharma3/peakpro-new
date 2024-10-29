// src/components/Features/Features.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for redirection
import './Features.css';

const featuresData = [
    {
        title: 'Workout Scheduler',
        description: 'Plan and manage your weekly workout routines.',
        icon: '📅',
        path: '/workout-scheduler' // Path for redirecting
    },
    {
        title: 'Exercise Library',
        description: 'Explore exercises for each muscle group: chest, back, arms, legs, abs, and shoulders.',
        icon: '💪',
        path: '/exercise-library'
    },
    {
        title: 'Nutrition Tracker',
        description: 'Log your meals and keep track of daily caloric intake.',
        icon: '🍎',
        path: '/nutrition-tracker'
    },
    {
        title: 'Progress Tracking',
        description: 'Visualize your fitness journey with detailed stats and analytics.',
        icon: '📊',
        path: '/progress-tracking'
    },
    {
        title: 'BMI Calculator',
        description: 'Calculate your Body Mass Index to set goals.',
        icon: '📐',
        path: '/bmi-calculator'
    },
    {
        title: 'Workout Logger',
        description: 'Easily log your workouts and view previous sessions.',
        icon: '🏋️',
        path: '/workout-logger'
    },
    {
        title: 'Goal Setting',
        description: 'Define fitness goals and stay motivated to achieve them.',
        icon: '🎯',
        path: '/goal-setting'
    },
    {
        title: 'Community Support',
        description: 'Connect with a community to share tips and progress.',
        icon: '🤝',
        path: '/community-support'
    }
];

const Features = () => {
    return (
        <div className="features-container">
            <h2 className="features-title">Key Features</h2>
            <div className="features-grid">
                {featuresData.map((feature, index) => (
                    <Link to={feature.path} className="feature-card" key={index}>
                        <span className="feature-icon">{feature.icon}</span>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Features;

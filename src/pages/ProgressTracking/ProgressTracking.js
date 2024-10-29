// src/pages/ProgressTracking/ProgressTracking.js
import React from 'react';
import './ProgressTracking.css';

const progressData = [
    {
        title: 'Weight',
        description: 'Track your weight over time to see your progress.',
        icon: '⚖️',
        value: '70 kg'
    },
    {
        title: 'Workouts Completed',
        description: 'Total workouts logged this month.',
        icon: '🏋️‍♀️',
        value: '15'
    },
    {
        title: 'Average Workout Duration',
        description: 'Keep an eye on how long you are training.',
        icon: '⏳',
        value: '45 min'
    },
    {
        title: 'Calories Burned',
        description: 'Total calories burned this week.',
        icon: '🔥',
        value: '1200 kcal'
    },
    {
        title: 'Fitness Level',
        description: 'Your overall fitness score based on workouts and diet.',
        icon: '🏆',
        value: '85%'
    },
    {
        title: 'Personal Best',
        description: 'Record your personal best for different exercises.',
        icon: '🥇',
        value: '100 kg Squat'
    }
];

const ProgressTracking = () => {
    return (
        <div className="progress-tracking-container">
            <h2 className="progress-tracking-title">Progress Tracking</h2>
            <p className="progress-tracking-description">
                Visualize your fitness journey and track your achievements!
            </p>
            <div className="progress-tracking-content">
                {progressData.map((progress, index) => (
                    <div className="progress-card" key={index}>
                        <span className="progress-icon">{progress.icon}</span>
                        <h3 className="progress-card-title">{progress.title}</h3>
                        <p className="progress-card-description">{progress.description}</p>
                        <p className="progress-card-value">{progress.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressTracking;

// src/pages/ExerciseLibrary/ExerciseLibrary.js
import React from 'react';
import './ExerciseLibrary.css';

const exercisesData = [
    {
        title: 'Chest Exercises',
        description: 'Push-ups, bench press, and chest flies to build your pecs.',
        icon: '💪'
    },
    {
        title: 'Back Exercises',
        description: 'Deadlifts, pull-ups, and rows for a strong back.',
        icon: '🏋️‍♂️'
    },
    {
        title: 'Arm Exercises',
        description: 'Bicep curls, tricep dips, and hammer curls for toned arms.',
        icon: '✋'
    },
    {
        title: 'Leg Exercises',
        description: 'Squats, lunges, and leg press for powerful legs.',
        icon: '🦵'
    },
    {
        title: 'Core Exercises',
        description: 'Planks, sit-ups, and leg raises to strengthen your core.',
        icon: '🧘‍♀️'
    },
    {
        title: 'Shoulder Exercises',
        description: 'Shoulder press, lateral raises, and front raises for defined shoulders.',
        icon: '🏋️‍♀️'
    }
];

const ExerciseLibrary = () => {
    return (
        <div className="exercise-library-container">
            <h2 className="exercise-library-title">Exercise Library</h2>
            <p className="exercise-library-description">
                Explore exercises for each muscle group and enhance your workout routine!
            </p>
            <div className="exercise-library-content">
                {exercisesData.map((exercise, index) => (
                    <div className="exercise-card" key={index}>
                        <span className="exercise-icon">{exercise.icon}</span>
                        <h3 className="exercise-card-title">{exercise.title}</h3>
                        <p className="exercise-card-description">{exercise.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExerciseLibrary;

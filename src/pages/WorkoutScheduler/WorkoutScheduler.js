// src/pages/WorkoutScheduler/WorkoutScheduler.js
import React from 'react';
import './WorkoutScheduler.css';

const WorkoutScheduler = () => {
    return (
        <div className="workout-scheduler-container">
            <h2 className="workout-scheduler-title">Workout Scheduler</h2>
            <p className="workout-scheduler-description">
                Plan and manage your weekly workout routines effectively!
            </p>
            <div className="workout-scheduler-content">
                <div className="workout-card">
                    <span className="workout-icon">🏋️‍♂️</span>
                    <h3 className="workout-card-title">Strength Training</h3>
                    <p className="workout-card-description">
                        Build muscle and strength with targeted exercises.
                    </p>
                </div>
                <div className="workout-card">
                    <span className="workout-icon">🏃‍♀️</span>
                    <h3 className="workout-card-title">Cardio Workouts</h3>
                    <p className="workout-card-description">
                        Improve your cardiovascular fitness with running, cycling, or HIIT.
                    </p>
                </div>
                <div className="workout-card">
                    <span className="workout-icon">🧘‍♂️</span>
                    <h3 className="workout-card-title">Flexibility and Mobility</h3>
                    <p className="workout-card-description">
                        Enhance your flexibility and mobility through yoga and stretching.
                    </p>
                </div>
                <div className="workout-card">
                    <span className="workout-icon">⚽️</span>
                    <h3 className="workout-card-title">Sports Training</h3>
                    <p className="workout-card-description">
                        Focus on sport-specific training to enhance your performance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkoutScheduler;

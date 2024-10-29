// src/pages/WorkoutLogger/WorkoutLogger.js
import React, { useState } from 'react';
import './WorkoutLogger.css';

const WorkoutLogger = () => {
    const [exercise, setExercise] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [workouts, setWorkouts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newWorkout = { exercise, duration, date };
        setWorkouts([...workouts, newWorkout]);
        resetForm();
    };

    const resetForm = () => {
        setExercise('');
        setDuration('');
        setDate('');
    };

    return (
        <div className="workout-logger-container">
            <h2 className="workout-logger-title">Workout Logger</h2>
            <form onSubmit={handleSubmit} className="workout-logger-form">
                <div className="workout-input-group">
                    <label htmlFor="exercise" className="workout-label">Exercise:</label>
                    <input
                        type="text"
                        id="exercise"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        className="workout-input"
                        required
                    />
                </div>
                <div className="workout-input-group">
                    <label htmlFor="duration" className="workout-label">Duration (minutes):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="workout-input"
                        required
                    />
                </div>
                <div className="workout-input-group">
                    <label htmlFor="date" className="workout-label">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="workout-input"
                        required
                    />
                </div>
                <button type="submit" className="workout-button">Log Workout</button>
            </form>
            <div className="workout-log">
                <h3 className="workout-log-title">Logged Workouts</h3>
                <ul className="workout-list">
                    {workouts.map((workout, index) => (
                        <li key={index} className="workout-item">
                            <strong>{workout.exercise}</strong> - {workout.duration} minutes on {workout.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkoutLogger;

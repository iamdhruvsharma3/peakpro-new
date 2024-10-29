import React, { useState, useEffect } from 'react';
import './Analytics.css';

const Analytics = () => {
    // Mock data for statistics - replace this with real data in a complete app
    const [nutritionData, setNutritionData] = useState([]);
    const [workoutData, setWorkoutData] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [workoutsCompleted, setWorkoutsCompleted] = useState(0);

    // Calculate mock stats (replace this with real calculations based on data)
    useEffect(() => {
        // Mock data fetching or calculation
        const mockNutrition = [
            { calories: 250 }, { calories: 500 }, { calories: 300 }
        ];
        const mockWorkouts = [
            { type: 'Running', duration: 30 }, { type: 'Cycling', duration: 20 }
        ];
        setNutritionData(mockNutrition);
        setWorkoutData(mockWorkouts);

        // Total calories and workouts completed
        const totalCals = mockNutrition.reduce((sum, entry) => sum + entry.calories, 0);
        setTotalCalories(totalCals);
        setWorkoutsCompleted(mockWorkouts.length);
    }, []);

    return (
        <div className="analytics-container">
            <h2 className="analytics-title">Analytics Overview</h2>
            <div className="analytics-card">
                <h3>Total Calories Consumed</h3>
                <p>{totalCalories} kcal</p>
            </div>
            <div className="analytics-card">
                <h3>Workouts Completed</h3>
                <p>{workoutsCompleted}</p>
            </div>
            <div className="analytics-card">
                <h3>Average Calories per Meal</h3>
                <p>{nutritionData.length > 0 ? (totalCalories / nutritionData.length).toFixed(2) : 0} kcal</p>
            </div>
            <div className="analytics-card">
                <h3>Total Workout Time</h3>
                <p>{workoutData.reduce((sum, entry) => sum + entry.duration, 0)} minutes</p>
            </div>
        </div>
    );
};

export default Analytics;

// src/components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Your PeakPro Dashboard</h2>
            <div className="stats-overview">
                <div className="stat-card">
                    <h3>Total Workouts</h3>
                    <p>45</p>
                </div>
                <div className="stat-card">
                    <h3>Total Calories Burned</h3>
                    <p>12,340 kcal</p>
                </div>
                <div className="stat-card">
                    <h3>BMI</h3>
                    <p>22.4</p>
                </div>
            </div>
            <div className="recent-activity">
                <h3>Recent Activities</h3>
                <ul>
                    <li>Chest Workout - 1 hour - 400 kcal</li>
                    <li>Leg Workout - 1.5 hours - 600 kcal</li>
                    <li>Cardio - 45 minutes - 300 kcal</li>
                </ul>
            </div>
            <div className="progress-summary">
                <h3>Weekly Progress</h3>
                <p>You've completed 4 out of 5 planned workouts this week. Keep it up!</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

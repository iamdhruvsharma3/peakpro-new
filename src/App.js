// src/App.js
import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import WorkoutLogger from './components/WorkoutLogger/WorkoutLogger';
import NutritionLogger from './components/NutritionLogger/NutritionLogger';
import Analytics from './components/Analytics/Analytics';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

// Importing all feature components
import WorkoutScheduler from './pages/WorkoutScheduler/WorkoutScheduler';
import ExerciseLibrary from './pages/ExerciseLibrary/ExerciseLibrary';
import NutritionTracker from './pages/NutritionTracker/NutritionTracker';
import ProgressTracking from './pages/ProgressTracking/ProgressTracking';
import BMICalculator from './pages/BMICalculator/BMICalculator';
import GoalSetting from './pages/GoalSetting/GoalSetting';
import CommunitySupport from './pages/CommunitySupport/CommunitySupport';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/signup" element={<Auth />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/workout-logger" element={<WorkoutLogger />} />
                    <Route path="/nutrition-logger" element={<NutritionLogger />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/workout-scheduler" element={<WorkoutScheduler />} />
                    <Route path="/exercise-library" element={<ExerciseLibrary />} />
                    <Route path="/nutrition-tracker" element={<NutritionTracker />} />
                    <Route path="/progress-tracking" element={<ProgressTracking />} />
                    <Route path="/bmi-calculator" element={<BMICalculator />} />
                    <Route path="/goal-setting" element={<GoalSetting />} />
                    <Route path="/community-support" element={<CommunitySupport />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

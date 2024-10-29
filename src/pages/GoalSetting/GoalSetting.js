import React, { useState } from 'react';
import './GoalSetting.css';

const GoalSetting = () => {
    const [goal, setGoal] = useState('');
    const [goalsList, setGoalsList] = useState([]);

    const handleAddGoal = (event) => {
        event.preventDefault();
        if (goal) {
            setGoalsList([...goalsList, goal]);
            setGoal(''); // Clear the input field after adding
        }
    };

    const handleRemoveGoal = (index) => {
        const newGoalsList = goalsList.filter((_, i) => i !== index);
        setGoalsList(newGoalsList);
    };

    return (
        <div className="goal-setting-container">
            <h2 className="goal-title">Goal Setting</h2>
            <form className="goal-form" onSubmit={handleAddGoal}>
                <div className="form-group">
                    <input
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Enter your fitness goal"
                        required
                    />
                    <button type="submit" className="btn">Add Goal</button>
                </div>
            </form>
            <ul className="goals-list">
                {goalsList.map((g, index) => (
                    <li key={index} className="goal-item">
                        {g}
                        <button onClick={() => handleRemoveGoal(index)} className="remove-btn">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalSetting;

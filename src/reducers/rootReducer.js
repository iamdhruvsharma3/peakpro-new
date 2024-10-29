// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import workoutReducer from './workoutReducer';
import nutritionReducer from './nutritionReducer';

const rootReducer = combineReducers({
    workout: workoutReducer,
    nutrition: nutritionReducer,
});

export default rootReducer;

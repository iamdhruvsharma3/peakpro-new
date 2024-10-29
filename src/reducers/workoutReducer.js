// src/reducers/workoutReducer.js
import { ADD_WORKOUT, SET_WORKOUTS } from '../actions/actionTypes';

const initialState = {
    workouts: [],
};

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORKOUT:
            return {
                ...state,
                workouts: [...state.workouts, action.payload],
            };
        case SET_WORKOUTS:
            return {
                ...state,
                workouts: action.payload,
            };
        default:
            return state;
    }
};

export default workoutReducer;

import { ADD_WORKOUT, SET_WORKOUTS } from './actionTypes';

// Action to add a new workout
export const addWorkout = (workout) => ({
    type: ADD_WORKOUT,
    payload: workout,
});

// Action to set the list of workouts
export const setWorkouts = (workouts) => ({
    type: SET_WORKOUTS,
    payload: workouts,
});

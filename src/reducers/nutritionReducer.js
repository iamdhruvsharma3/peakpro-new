// src/reducers/nutritionReducer.js
import { ADD_NUTRITION_ENTRY, SET_NUTRITION_ENTRIES } from '../actions/actionTypes';

const initialState = {
    nutritionEntries: [],
};

const nutritionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUTRITION_ENTRY:
            return {
                ...state,
                nutritionEntries: [...state.nutritionEntries, action.payload],
            };
        case SET_NUTRITION_ENTRIES:
            return {
                ...state,
                nutritionEntries: action.payload,
            };
        default:
            return state;
    }
};

export default nutritionReducer;

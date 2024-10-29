import { ADD_NUTRITION_ENTRY, SET_NUTRITION_ENTRIES } from './actionTypes';

// Action to add a new nutrition entry
export const addNutritionEntry = (entry) => ({
    type: ADD_NUTRITION_ENTRY,
    payload: entry,
});

// Action to set the list of nutrition entries
export const setNutritionEntries = (entries) => ({
    type: SET_NUTRITION_ENTRIES,
    payload: entries,
});

// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // Import the combined reducers

const store = createStore(rootReducer);

export default store;

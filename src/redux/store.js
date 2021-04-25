import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './feedback/feedback-reducers';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

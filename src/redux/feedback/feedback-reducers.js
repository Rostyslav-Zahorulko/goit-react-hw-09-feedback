import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { feedbackActions } from '../feedback';

const { goodIncrement, neutralIncrement, badIncrement } = feedbackActions;

const goodReducer = createReducer(0, {
  [goodIncrement]: (state, { payload }) => state + payload,
});

const neutralReducer = createReducer(0, {
  [neutralIncrement]: (state, { payload }) => state + payload,
});

const badReducer = createReducer(0, {
  [badIncrement]: (state, { payload }) => state + payload,
});

const optionsReducer = combineReducers({
  good: goodReducer,
  neutral: neutralReducer,
  bad: badReducer,
});

const stepReducer = createReducer(1, {
  _: (state, _) => state,
});

const feedbackReducer = combineReducers({
  options: optionsReducer,
  step: stepReducer,
});

export default feedbackReducer;

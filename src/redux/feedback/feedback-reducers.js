import { combineReducers } from 'redux';
import feedbackTypes from './feedback-types';

const { GOOD_INCREMENT, NEUTRAL_INCREMENT, BAD_INCREMENT } = feedbackTypes;

const goodReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case GOOD_INCREMENT:
      return state + payload;
    default:
      return state;
  }
};

const neutralReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case NEUTRAL_INCREMENT:
      return state + payload;
    default:
      return state;
  }
};

const badReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case BAD_INCREMENT:
      return state + payload;
    default:
      return state;
  }
};

const optionsReducer = combineReducers({
  good: goodReducer,
  neutral: neutralReducer,
  bad: badReducer,
});

const stepReducer = (state = 1, _) => state;

const feedbackReducer = combineReducers({
  options: optionsReducer,
  step: stepReducer,
});

export default feedbackReducer;

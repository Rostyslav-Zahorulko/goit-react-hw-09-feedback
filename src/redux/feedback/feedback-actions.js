import feedbackTypes from './feedback-types';

const { GOOD_INCREMENT, NEUTRAL_INCREMENT, BAD_INCREMENT } = feedbackTypes;

const goodIncrement = value => ({
  type: GOOD_INCREMENT,
  payload: value,
});

const neutralIncrement = value => ({
  type: NEUTRAL_INCREMENT,
  payload: value,
});

const badIncrement = value => ({
  type: BAD_INCREMENT,
  payload: value,
});

const feedbackActions = {
  goodIncrement,
  neutralIncrement,
  badIncrement,
};

export default feedbackActions;

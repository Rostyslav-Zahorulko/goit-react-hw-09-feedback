import { createAction } from '@reduxjs/toolkit';

const goodIncrement = createAction('feedback/goodIncrement');
const neutralIncrement = createAction('feedback/neutralIncrement');
const badIncrement = createAction('feedback/badIncrement');

const feedbackActions = {
  goodIncrement,
  neutralIncrement,
  badIncrement,
};

export default feedbackActions;

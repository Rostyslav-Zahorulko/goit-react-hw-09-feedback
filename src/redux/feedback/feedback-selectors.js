const getGood = state => state.feedback.options.good;
const getNeutral = state => state.feedback.options.neutral;
const getBad = state => state.feedback.options.bad;
const getTotal = state => getGood(state) + getNeutral(state) + getBad(state);
const getPositivePercentage = state =>
  Math.round((getGood(state) / getTotal(state)) * 100);
const getOptions = state => Object.keys(state.feedback.options);
const getStep = state => state.feedback.step;

const feedbackSelectors = {
  getGood,
  getNeutral,
  getBad,
  getTotal,
  getPositivePercentage,
  getOptions,
  getStep,
};

export default feedbackSelectors;

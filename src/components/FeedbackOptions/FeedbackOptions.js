import { connect } from 'react-redux';
import './FeedbackOptions.scss';
import { feedbackSelectors } from '../../redux/feedback';
import { feedbackActions } from '../../redux/feedback';

const { getOptions, getStep } = feedbackSelectors;
const { goodIncrement, neutralIncrement, badIncrement } = feedbackActions;

const FeedbackOptions = ({ options, step, onLeaveFeedback }) => (
  <ul className="feedback-btn-list">
    {options.map(option => {
      const capitalizedOption = option[0].toUpperCase() + option.substring(1);

      return (
        <li className="feedback-btn-list-item" key={option}>
          <button
            className="feedback-btn"
            type="button"
            id={option}
            onClick={event => onLeaveFeedback(event, step)}
          >
            {capitalizedOption}
          </button>
        </li>
      );
    })}
  </ul>
);

const mapStateToProps = state => ({
  options: getOptions(state),
  step: getStep(state),
});

const mapDispatchToProps = dispatch => ({
  onLeaveFeedback: ({ target: { id } }, value) => {
    switch (id) {
      case 'good':
        return dispatch(goodIncrement(value));

      case 'neutral':
        return dispatch(neutralIncrement(value));

      case 'bad':
        return dispatch(badIncrement(value));

      default:
        return;
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);

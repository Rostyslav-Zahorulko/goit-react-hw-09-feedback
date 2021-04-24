import { connect } from 'react-redux';
import Notification from '../Notification';
import './Statistics.scss';
import { feedbackSelectors } from '../../redux/feedback';

const {
  getGood,
  getNeutral,
  getBad,
  getTotal,
  getPositivePercentage,
} = feedbackSelectors;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className="statistics-title">Statistics</h2>

    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <>
        <p className="statistics-item">Good: {good}</p>
        <p className="statistics-item">Neutral: {neutral}</p>
        <p className="statistics-item">Bad: {bad}</p>
        <p className="statistics-item">Total: {total}</p>
        <p className="statistics-item">
          Positive feedback: {positivePercentage}%
        </p>
      </>
    )}
  </>
);

const mapStateToProps = state => ({
  good: getGood(state),
  neutral: getNeutral(state),
  bad: getBad(state),
  total: getTotal(state),
  positivePercentage: getPositivePercentage(state),
});

export default connect(mapStateToProps)(Statistics);

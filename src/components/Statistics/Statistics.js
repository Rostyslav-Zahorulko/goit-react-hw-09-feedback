import PropTypes from 'prop-types';

import Notification from '../Notification';

import './Statistics.css';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

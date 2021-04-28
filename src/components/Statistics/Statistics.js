import { useSelector } from 'react-redux';
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

const Statistics = () => {
  const good = useSelector(getGood);
  const neutral = useSelector(getNeutral);
  const bad = useSelector(getBad);
  const total = useSelector(getTotal);
  const positivePercentage = useSelector(getPositivePercentage);

  return (
    <>
      <h2 className="statistics-title">Statistics</h2>

      {total === 0 ? (
        <Notification>No feedback given</Notification>
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
};

export default Statistics;

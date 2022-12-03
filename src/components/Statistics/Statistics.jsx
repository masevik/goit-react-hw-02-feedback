import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <StatisticsItem>
          <span>Good:</span>
          <span>{good}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Bad:</span>
          <span>{bad}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Total:</span>
          <span>{total}</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Positive feedback:</span>
          <span>{positivePercentage}%</span>
        </StatisticsItem>
      </ul>
    </>
  );
};

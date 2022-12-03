import { Box } from '../Box';
import { Button, StatisticsItem } from './Feedback.styled';

export const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onClick,
}) => {
  return (
    <Box pl="100px" pt="20px">
      <h2>Please leave feedback</h2>
      <Box display="flex" mt="10px" mb="10px" as="div">
        <Button type="button" name="good" onClick={onClick}>
          Good
        </Button>
        <Button type="button" name="neutral" onClick={onClick}>
          Neutral
        </Button>
        <Button type="button" name="bad" onClick={onClick}>
          Bad
        </Button>
      </Box>
      <h3>Statistics</h3>
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
    </Box>
  );
};

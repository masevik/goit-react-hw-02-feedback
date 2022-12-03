import { Box } from '../Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Box display="flex" mt="10px" mb="10px" as="div">
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </Box>
  );
};

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Box } from '../Box';

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
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={onClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Box>
  );
};

import PropTypes from 'prop-types';
import { Component } from 'react';
import { Box } from '../Box';
import { Button, StatisticsItem } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Box pl="100px" pt="20px">
        <h2>Please leave feedback</h2>
        <Box display="flex" mt="10px" mb="10px" as="div">
          <Button>Good</Button>
          <Button>Neutral</Button>
          <Button>Bad</Button>
        </Box>
        <h3>Statistics</h3>
        <ul>
          <StatisticsItem>
            <span>Good:</span>
            <span>{this.state.good}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Neutral:</span>
            <span>{this.state.neutral}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Bad:</span>
            <span>{this.state.bad}</span>
          </StatisticsItem>
        </ul>
      </Box>
    );
  }
}

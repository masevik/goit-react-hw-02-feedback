import { Component } from 'react';
import { Box } from '../Box';
import { Button, StatisticsItem } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const targetName = event.currentTarget.name;
    this.setState(prevState => {
      if (targetName === 'good') {
        return {
          good: prevState.good + 1,
        };
      }
      if (targetName === 'neutral') {
        return {
          neutral: prevState.neutral + 1,
        };
      }
      if (targetName === 'bad') {
        return {
          bad: prevState.bad + 1,
        };
      }
    });
  };

  render() {
    return (
      <Box pl="100px" pt="20px">
        <h2>Please leave feedback</h2>
        <Box display="flex" mt="10px" mb="10px" as="div">
          <Button type="button" name="good" onClick={this.handleIncrement}>
            Good
          </Button>
          <Button type="button" name="neutral" onClick={this.handleIncrement}>
            Neutral
          </Button>
          <Button type="button" name="bad" onClick={this.handleIncrement}>
            Bad
          </Button>
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

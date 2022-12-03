import { Component } from 'react';
import { Box } from '../Box';
import { Button, StatisticsItem } from './Feedback.styled';

export class Feedback extends Component {
  render() {
    return (
      <Box pl="100px" pt="20px">
        <h2>Please leave feedback</h2>
        <Box display="flex" mt="10px" mb="10px" as="div">
          <Button type="button" name="good" onClick={this.props.onClick}>
            Good
          </Button>
          <Button type="button" name="neutral" onClick={this.props.onClick}>
            Neutral
          </Button>
          <Button type="button" name="bad" onClick={this.props.onClick}>
            Bad
          </Button>
        </Box>
        <h3>Statistics</h3>
        <ul>
          <StatisticsItem>
            <span>Good:</span>
            <span>{this.props.good}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Neutral:</span>
            <span>{this.props.neutral}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Bad:</span>
            <span>{this.props.bad}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Total:</span>
            <span>{this.props.total}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Positive feedback:</span>
            <span>{this.props.positivePercentage}%</span>
          </StatisticsItem>
        </ul>
      </Box>
    );
  }
}

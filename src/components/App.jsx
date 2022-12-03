import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Feedback } from './Feedback/Feedback';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const targetName = event.currentTarget.name;
    this.setState(prevState => {
      switch (targetName) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          console.log('default');
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = countTotalFeedback => {
    const { good, neutral } = this.state;
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round(((good + neutral) * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          onClick={this.handleIncrement}
        />
        <GlobalStyle />
      </>
    );
  }
}

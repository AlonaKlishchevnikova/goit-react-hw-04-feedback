import { Component } from 'react';
import { Section } from 'modules/Section/Section';
import { Statistics } from 'modules/Statistics/Statistics';
import { FeedbackOption } from 'modules/FeedbackOption/FeedbackOption';
import { Notification } from 'modules/Notification/Notification';

export class App extends Component {jh
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
   handleClick = event => {
    const buttonName = event.target.name;
    this.setState(prevState => {
      return { [buttonName]: prevState[buttonName] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    const totalRates = this.countTotalFeedback();
    const goodRates = this.state.good;
    return goodRates > 0 ? Math.round((goodRates / totalRates) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalRates = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOption>
        </Section>

        <Section title="Statistics">
          {totalRates > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
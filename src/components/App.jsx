import React, { useState} from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);
    // console.log(positivePercentage)
    return isNaN(positive) ? 0 : positive;
  };

  const updateGood = () => {
    setGood(good + 1);
  };

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };

  const updateBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Section tittle="Please leave feedback">
        <div style={{ display: 'flex' }}>
          <FeedbackOption options={'good'} onLeaveFeedback={updateGood} />
          <FeedbackOption options={'neutral'} onLeaveFeedback={updateNeutral} />
          <FeedbackOption options={'bad'} onLeaveFeedback={updateBad} />
        </div>
      </Section>

      <Section tittle="Statistics">
        <div>
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      </Section>
    </div>
  );
};

export default App;

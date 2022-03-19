import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ tittle }) => <h2>{tittle}</h2>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let average = total === 0 ? 0 : (good - bad) / total;
  let positive = total === 0 ? 0 : (100 * good) / total;

  return (
    <>
      <Header tittle="statistics" />
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average.toFixed(2)} />
          <Statistic text="positive" value={`${positive.toFixed(2)}%`} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <Header tittle="give feedback" />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      {(!!good || !!neutral || !!bad) && (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
      {!good && !neutral && !bad && <p>No feedback given</p>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({text}) => <h2>{text}</h2>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));

  const getMaxIndex = () => points.indexOf(Math.max(...points));

  const handleNext = () => {
    setSelected(Math.round(Math.random() * (props.anecdotes.length - 1)));
  };

  const handleVote = () => {
    let newArr = [...points];
    newArr[selected]++;
    setPoints(newArr);
  };

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleNext} />
      <Header text='Anecdote with most votes'/>
      <p>{props.anecdotes[getMaxIndex()]}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

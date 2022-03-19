import React from "react";
import ReactDOM from "react-dom";

const Header = ({course}) => <h1>{course}</h1>;

const Content = ({parts}) => (
  <>
    {parts.map(({name, exercises}, i) => (
      <p key={i}>{name} {exercises}</p>
    ))}
  </>
);

const Total = ({text, values}) => (
  <p>
    {text} {values.reduce((a, b) => a + b)}
  </p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        text="Number of exercises"
        values={course.parts.map(part => part.exercises)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

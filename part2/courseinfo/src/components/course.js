import React from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Part = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map(({ name, exercises, id }) => (
      <Part text={name} value={exercises} key={id} />
    ))}
  </>
);

const Total = ({ text, values }) => (
  <p>
    <strong>
      {text} {values.reduce((a, b) => a + b)}
    </strong>
  </p>
);

const Course = ({ course }) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total
      text="Number of exercises"
      values={course.parts.map((part) => part.exercises)}
    />
  </div>
);

export default Course;

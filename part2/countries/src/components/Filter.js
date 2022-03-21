import React from "react";

const Filter = ({text, filter, handleFilterChange }) => (
  <div>
    <span><strong>{text}</strong></span>
    <input type="text" value={filter} onChange={handleFilterChange} />
  </div>
);

export default Filter;

import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  addPhone,
  handleNameChange,
  handleNumberChange,
}) => (
  <form>
    <div>
      name:{" "}
      <input type="text" value={newName} onChange={handleNameChange} required />
    </div>
    <div>
      number:{" "}
      <input
        type="text"
        value={newNumber}
        onChange={handleNumberChange}
        required
      />
    </div>
    <div>
      <button type="submit" onClick={addPhone}>
        add
      </button>
    </div>
  </form>
);

export default PersonForm;

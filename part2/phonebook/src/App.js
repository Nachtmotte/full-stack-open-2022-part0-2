import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    warning: false,
  });

  useEffect(() => {
    personService.getAll().then((data) => setPersons(data));
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const showNotificationMessage = (message, warning) => {
    setNotificationMessage({
      message,
      warning,
    });
    setTimeout(
      () =>
        setNotificationMessage({
          message: "",
          warning: false,
        }),
      5000
    );
  };

  const findNameDuplicate = () =>
    persons.find((person) => person.name === newName);

  const addPhone = (event) => {
    event.preventDefault();
    const person = findNameDuplicate();
    if (person !== undefined) {
      updatePhone(person);
    } else {
      personService
        .create({
          name: newName,
          number: newNumber,
        })
        .then((data) => {
          setPersons(persons.concat(data));
          showNotificationMessage(`Added ${data.name}`, false);
        });
    }
    setNewName("");
    setNewNumber("");
  };

  const deletePhone = (p) => {
    const result = window.confirm(`Delete ${p.name}`);
    if (result) {
      personService
        .deleteObject(p.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== p.id));
          showNotificationMessage(`Deleted ${p.name}`, false);
        })
        .catch(() =>
          showNotificationMessage(
            `Information of ${p.name} has already been removed from server`,
            true
          )
        );
    }
  };

  const updatePhone = (p) => {
    const result = window.confirm(
      `${p.name} is already added to phonebook, replace the old number with a new one?`
    );
    if (result) {
      const changePhone = { ...p, number: newNumber };
      personService.update(p.id, changePhone).then((data) => {
        setPersons(
          persons.map((person) => (person.id !== p.id ? person : data))
        );
        showNotificationMessage(`Updated ${p.name}`, false);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addPhone={addPhone}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Notification
        message={notificationMessage.message}
        warning={notificationMessage.warning}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={newFilter}
        handleDelete={deletePhone}
      />
    </div>
  );
};

export default App;

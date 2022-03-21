import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data));

    //With fetch
    /*fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));*/
  }, []);

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <Filter
        text="find countries:"
        filter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      <Countries countries={countries} filter={newFilter} />
    </div>
  );
};

export default App;

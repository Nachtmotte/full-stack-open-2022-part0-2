import React, { useState, useEffect } from "react";
import Country from "./Country";
import Weather from "./Weather";

const Countries = ({ countries, filter }) => {
  const [showCountry, setShowCountry] = useState(null);
  useEffect(() => setShowCountry(null), [filter]);

  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {showCountry !== null ? (
        <>
          <Country country={showCountry} />
          <Weather capital={showCountry.capital[0]} />
        </>
      ) : filteredCountries.length === 1 ? (
        <>
          <Country country={filteredCountries[0]} />
          <Weather capital={filteredCountries[0].capital[0]} />
        </>
      ) : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <>
          {filteredCountries.map((country, i) => (
            <div key={i}>
              <strong>{country.name.common}</strong>
              <button onClick={() => setShowCountry(country)}>show</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Countries;

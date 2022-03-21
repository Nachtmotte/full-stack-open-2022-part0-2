import React from "react";

const Country = ({country}) => {    
    return(
    <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital[0]}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
            {Object.keys(country.languages).map(key => <li key={key}>{country.languages[key]}</li>)}
        </ul>
        <img src={country.flags['png']} alt={`${country.name.common} flag`}/>
    </div>
)};

export default Country;
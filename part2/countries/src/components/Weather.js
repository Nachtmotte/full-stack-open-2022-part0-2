import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
      )
      .then(({ data }) => {
        setWeather(data.current);
      });
  }, []);

  return (
    <>
      {weather === null ? (
        <></>
      ) : (
        <div>
          <h2>Weather in {capital}</h2>
          <p>
            <strong>temperature: </strong>
            {weather.temperature} Celcius
          </p>
          <img src={weather.weather_icons[0]} alt="wather_icon" />
          <p>
            <strong>wind: </strong>
            {weather.wind_speed} direction {weather.wind_dir}
          </p>
        </div>
      )}
    </>
  );
};

export default Weather;

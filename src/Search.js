import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03449882dfe5aced439e51d0cb6c2b82&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function getResult(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={getResult} />
      <input type="submit" value="Search" />
      <br />
      <br />
      {result}
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°c </li>
          <li> Description: {weather.description} </li>
          <li> Humidity: {Math.round(weather.humidity)}% </li>
          <li> Wind Speed: {Math.round(weather.wind)} kmph </li>
          <li>
            {" "}
            <img src={weather.icon} alt="weather icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

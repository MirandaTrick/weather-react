import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setResult(true);
    setWeather({
      location: response.data.name,
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
      <div class="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city"
          aria-describedby="button-addon2"
          autoFocus="on"
          onChange={getResult}
        />
        <button class="btn btn-primary" type="submit" id="button-addon2">
          Search
        </button>
        <button class="btn btn-primary" type="submit" id="button-addon2">
          Current Location
        </button>
      </div>
      <br />
      <br />
      {result}
    </form>
  );

  if (result) {
    return (
      <div className="search">
        <div>
          {form}
          <h1> {weather.location} </h1>
          <div className="row">
            <div className="col-6">
              <img src={weather.icon} alt="weather icon" />
              <span className="temperature">
                {" "}
                {Math.round(weather.temperature)}{" "}
                <span className="unit"> °c</span>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li> {weather.description} </li>
                <li> Humidity: {Math.round(weather.humidity)}% </li>
                <li> Wind Speed: {Math.round(weather.wind)} kmph </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

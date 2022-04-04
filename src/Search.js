import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormattedDate from "./FormattedDate";
import App from "./App";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      location: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setResult(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchDefault();
  }

  function getResult(event) {
    setCity(event.target.value);
  }

  function searchDefault() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03449882dfe5aced439e51d0cb6c2b82&units=metric`;
    axios.get(url).then(showTemperature);
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
        <button class="btn btn-danger" type="submit" id="button-addon2">
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
      <div>
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    searchDefault();
    return form;
  }
}

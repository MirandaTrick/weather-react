import React from "react";
import axios from "axios";

export default function () {
  function handleResponse(response) {
    alert(
      `The weather in New York is ${Math.round(response.data.main.temp)}°c `
    );
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=03449882dfe5aced439e51d0cb6c2b82&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}

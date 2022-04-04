import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="search">
      <div>
        <h1> {props.data.location} </h1>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
        <div className="row">
          <div className="col-6">
            <img src={props.data.icon} alt="weather icon" />
            <span className="temperature">
              {" "}
              {Math.round(props.data.temperature)}{" "}
              <span className="unit"> °c</span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize"> {props.data.description} </li>
              <li> Humidity: {Math.round(props.data.humidity)}% </li>
              <li> Wind Speed: {Math.round(props.data.wind)} kmph </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

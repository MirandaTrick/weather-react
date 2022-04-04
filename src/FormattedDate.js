import React from "react";
import Search from "./Search";
import axios from "axios";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${minutes}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    hours = `0${minutes}`;
  }

  return (
    <div>
      {" "}
      {day} {hours}:{minutes}{" "}
    </div>
  );
}

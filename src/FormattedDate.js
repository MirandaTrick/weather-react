import React from "react";
import Search from "./Search";
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

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {" "}
      {hours}:{minutes}{" "}
    </div>
  );
}

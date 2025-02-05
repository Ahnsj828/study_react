import React from "react";
import "./componentsStyle.css";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);

  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}</h2>
      <h2> {weather?.main.temp * 1.8 + 32}</h2>
      <h3>맑은 하늘</h3>
    </div>
  );
};

export default WeatherBox;

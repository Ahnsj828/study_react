import React from "react";
import { Button } from "react-bootstrap";
import "./componentsStyle.css";

const WeatherButton = ({ cities }) => {
  console.log("cities", cities);

  const searchByCity = (cityName) => {};

  return (
    <div className="weather-button">
      <Button variant="light">CurrentLocation</Button>

      {cities.map((item, index) => (
        <Button variant="light" key={index} onClick={() => searchByCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

import React from "react";
import { Button } from "react-bootstrap";
import "./componentsStyle.css";

const WeatherButton = ({ cities }) => {
  console.log("cities", cities);

  return (
    <div className="weather-button">
      <Button variant="light">CurrentLocation</Button>
    </div>
  );
};

export default WeatherButton;

import React from "react";
import { Button } from "react-bootstrap";
import "./componentsStyle.css";

const WeatherButton = ({ cities }) => {
  console.log("cities", cities);
  return (
    <div className="weather-button">
      <Button variant="light">CurrentLocation</Button>
      <Button variant="dark">Paris</Button>
      <Button variant="dark">London</Button>
      <Button variant="dark">New York</Button>
      <Button variant="dark">Tokyo</Button>
    </div>
  );
};

export default WeatherButton;

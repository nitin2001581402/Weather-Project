import React, { useState } from "react";
import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app">
      <h1>Weather Application</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  // Image URLs based on weather conditions
  const RAIN_URL =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJBSU4lMjBXRUFUSEVSfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";

  // Dynamically changing the image URL based on weather data
  const getWeatherImage = (temp, humidity) => {
    if (humidity > 80) {
      return RAIN_URL;
    } else if (temp < 15) {
      return COLD_URL;
    } else {
      return HOT_URL;
    }
  };

  // Ensure that the image updates whenever the city changes
  useEffect(() => {
    // You can place any logic here to fetch new weather data when city changes
    // If you're fetching weather data, ensure to update the 'info' state
  }, [info]);

  return (
    <div className="InfoBox">
      <h1>Weather Details</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={getWeatherImage(info.temp, info.humidity)} // Dynamic image based on weather data
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp < 15 ? (
              <AcUnitIcon />
            ) : (
              <WbSunnyIcon />
            )}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div>Temperature: {info.temp}°C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Min Temp: {info.tempMin}°C</div>
            <div>Max Temp: {info.tempMax}°C</div>
            <div>
              The weather is described as <i>{info.weather}</i> and feels like{" "}
              {info.feelsLike}°C.
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;

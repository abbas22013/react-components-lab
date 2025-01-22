// src/components/WeatherForecast/WeatherForecast.jsx
import React from 'react';
import './WeatherForecast.css';  // Import the CSS for styling

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
}

export default WeatherForecast;

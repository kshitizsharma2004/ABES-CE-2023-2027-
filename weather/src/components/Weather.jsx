import React from "react";

function Weather({ date, temp, desc, icon, humidity, wind }) {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
        color: "white",
        margin: "15px auto",
        width: "300px",
        padding: "15px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h3>{new Date(date).toLocaleString()}</h3>
      <img
        src={`https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`}
        alt="weather icon"
      />
      <h2>{temp}°C</h2>
      <p>{desc}</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌬️ Wind: {wind} m/s</p>
    </div>
  );
}

export default Weather;

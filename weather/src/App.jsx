import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(
      "https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setForecast(data.list); // store only the list array
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🌤️ 5-Day Weather Forecast</h1>

      {forecast.length > 0 ? (
        forecast.slice(0, 5).map((item, index) => (
          <Weather
            key={index}
            date={item.dt_txt}
            temp={item.main.temp}
            desc={item.weather[0].description}
            icon={item.weather[0].icon}
            humidity={item.main.humidity}
            wind={item.wind.speed}
          />
        ))
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
}

export default App;

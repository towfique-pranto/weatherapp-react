import { FaSearchLocation, FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import styles from "./App.module.css";
import { useState } from "react";
import sun from "./assets/sun.png";
import cloudy from "./assets/cloudy.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import thunder from "./assets/thunder.png";
import haze from "./assets/haze.png";
import fog from "./assets/fog.png";
import mist from "./assets/mist.png";
import drizzle from "./assets/drizzle.png";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleFetch = async (city) => {
    try {
      setError(null);
      const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(apiLink);

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      //console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      setWeatherData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const searchCity = data.get("search");
    handleFetch(searchCity);
    e.target.reset();
  };

  const getWeatherIcon = () => {
    if (!weatherData) return sun;
    const condition = weatherData?.weather?.[0]?.main;
    switch (condition) {
      case "Clear":
        return sun;
      case "Clouds":
        return cloudy;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return thunder;
      case "Haze":
        return haze;
      case "Fog":
        return fog;
      case "Mist":
        return mist;
      case "Drizzle":
        return drizzle;
      default:
        return sun;
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          placeholder="Enter City..."
          className={styles.searchBar}
          required
        />
        <button type="submit" className={styles.searchBtn}>
          <FaSearchLocation />
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {weatherData && (
        <>
          <img
            className={styles.weatherIcon}
            src={getWeatherIcon()}
            alt="Weather Condition"
          />
          <p className={styles.temperature}>
            {Math.round(weatherData.main.temp)}°C
          </p>
          <p className={styles.cityweather}>{weatherData.weather[0].main}</p>
          <p className={styles.city}>
            {weatherData.name}, {weatherData.sys.country}
          </p>

          <div className={styles.extraInfo}>
            <div className={styles.infoContainer}>
              <IoWater className={styles.icon} />
              <div>
                <p>Humidity</p>
                <strong>{weatherData.main.humidity}%</strong>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <FaWind className={styles.icon} />
              <div>
                <p>Wind Speed</p>
                <strong>{weatherData.wind.speed} m/s</strong>
              </div>
            </div>
          </div>
        </>
      )}

      {!weatherData && !error && (
        <p className={styles.welcome}>Search for a city to see the weather!</p>
      )}
    </div>
  );
}

export default App;

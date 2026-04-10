import { FaSearchLocation, FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import sun from "./assets/sun.png";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleFetch = async (city) => {
    try {
      const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(apiLink);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const searchCity = data.get("search");
    handleFetch(searchCity);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="City"
          className={styles.searchBar}
        />
        <button type="submit" className={styles.searchBtn}>
          <FaSearchLocation />
        </button>
      </form>
      <img className={styles.weatherIcon} src={sun} alt="sun" />
      <p className={styles.temperature}>
        {Math.round(weatherData?.main?.temp)}°C
      </p>
      <p className={styles.city}>{weatherData?.name}</p>
      <div className={styles.extraInfo}>
        <div className={styles.infoContainer}>
          <IoWater className={styles.icon} />
          <div>Humidity: {weatherData?.main?.humidity}%</div>
        </div>
        <div className={styles.infoContainer}>
          <FaWind className={styles.icon} />
          <div>Windspeed: {weatherData?.wind?.speed} m/s</div>
        </div>
      </div>
    </div>
  );
}

export default App;

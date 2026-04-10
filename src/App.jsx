import { FaSearchLocation, FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import sun from "./assets/sun.png";
import styles from "./App.module.css";

function App() {
  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("search"));
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
      <p className={styles.temperature}>temperature</p>
      <p className={styles.city}>city</p>
      <div className={styles.extraInfo}>
        <div className={styles.infoContainer}>
          <IoWater className={styles.icon} />
          <div>Humidity: 70%</div>
        </div>
        <div className={styles.infoContainer}>
          <FaWind className={styles.icon} />
          <div>Windspeed: 70%</div>
        </div>
      </div>
    </div>
  );
}

export default App;

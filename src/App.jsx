import { FaSearchLocation } from "react-icons/fa";
import sun from "./assets/sun.png";
import "./App.css";

function App() {
  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("search"));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" id="search" placeholder="City" />
        <button type="submit">
          <FaSearchLocation />
        </button>
      </form>
      <img src={sun} alt="sun" />
      <p>temperature</p>
      <p>city</p>
      <div>
        <div>random value</div>
        <div>random value</div>
      </div>
    </div>
  );
}

export default App;

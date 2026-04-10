# 🌦️ Weather React App

A responsive weather application built with **React** and **OpenWeatherMap API**. This app allows users to search for any city globally to get real-time weather updates including temperature, humidity, and wind speed.

## 🚀 Features

- **Real-time Data:** Fetches live weather information using the OpenWeatherMap API.
- **Dynamic Weather Icons:** Custom icons change based on weather conditions (Sun, Clouds, Rain, Snow, Mist, etc.).
- **Error Handling:** Gracefully handles invalid city names or API failures.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Country Recognition:** Displays city name along with the country code for better accuracy.

## 🧠 How it Works

The app uses a custom mapping function to sync OpenWeatherMap's condition codes with local assets to ensure visuals regardless of the weather.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Icons:** `react-icons`
- **Styling:** CSS Modules
- **API:** OpenWeatherMap API

## ⚙️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-react-app.git
    cd weather-react-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```env
    VITE_API_KEY=your_api_key_here
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
src/
├── assets/           # Weather icons (sun.png, rain.png, etc.)
├── App.jsx           # Main application logic
├── App.module.css    # Styles for the app
└── main.jsx          # Entry point
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

### TODOs:

- **Screenshot:**
- **Live Demo:**

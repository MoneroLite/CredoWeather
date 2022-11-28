import { useState } from "react";
import WeatherProvider from "./components/provider/weatherProvider/WeatherProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <WeatherProvider>
      <HomePage></HomePage>
    </WeatherProvider>
  );
}

export default App;

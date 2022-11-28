import axios from "axios";
import { useEffect, useState } from "react";
import { IWeather } from "../provider/weatherProvider/WeatherProvider.interface";

function useFetchWeather() {
  const [weather, setWeather] = useState<IWeather>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?lang=ru&appid=b5f473f7704a8179247ce0e38148b13f&units=metric&q=Ufa"
      )
      .then(({ data }) => {
        setWeather(data);
        setIsLoading(false);
      });
  }, []);
  return { weather, isLoading };
}

export default useFetchWeather;

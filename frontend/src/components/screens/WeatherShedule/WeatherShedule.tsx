import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./WeatherShedule.module.scss";

interface ICity {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
interface IWeatherListWind {
  speed: number;
  deg: number;
  gust: number;
}
interface IWeatherListWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
interface IWeatherListMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
interface IWeatherList {
  clouds?: { all: string };
  dt: number;
  dt_txt: string;
  main: IWeatherListMain;
  pop: number;
  snow: [];
  visibility: number;
  weather: IWeatherListWeather[];
  wind: IWeatherListWind;
}
interface IWeatherForecast {
  city: ICity;
  cnt: number;
  cod: string;
  list: IWeatherList[];
  message: number;
}

const WeatherShedule = () => {
  const [forecast, setForecast] = useState<IWeatherForecast>();
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?lang=ru&id=479561&units=metric&appid=b5f473f7704a8179247ce0e38148b13f&cnt=9"
      )
      .then(({ data }) => {
        setForecast(data);
        // setIsLoading(false);
      });
  }, []);

  console.log(forecast);

  return (
    <div className={styles.weatherWrap}>
      {forecast?.list.map((item) => (
        <div key={item.dt} className={styles.weatherCard}>
          <p>{item.dt_txt}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{item.weather[0].description}</p>
          <p>температура: {item.main.temp}&deg;</p>
          <p>влажность: {item.main.humidity}%</p>
          <p>облачность: {item.clouds?.all}%</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherShedule;

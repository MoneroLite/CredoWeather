import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./WeatherMain.module.scss";

const WeatherMain = () => {
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?lang=ru&appid=b5f473f7704a8179247ce0e38148b13f&units=metric&q=Ufa"
      )
      .then(({ data }) => {
        setWeather(data);
      });
  }, []);

  const [weather, setWeather] = useState();
  console.log(weather);

  const now = new Date();
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    timeZone: "Asia/Tokyo",
  });

  console.log("Intl.DateTimeFormat string: ", formatter.format(now));

  if (!weather) {
    return "";
  }

  return (
    <div className={styles.weatherWrap}>
      <div>
        <img
          className={styles.weatherIcon}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="icon"
        />
        <p className={styles.degree}>{weather.main.temp}&deg;</p>
        <p className={styles.feelDegree}>
          ощущается как {weather.main.feels_like}&deg;
        </p>
        <p className={styles.country}>{weather.name}</p>
      </div>
      <div>
        <p className={styles.time}>13:25</p>
        <p className={styles.description}>{weather.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherMain;

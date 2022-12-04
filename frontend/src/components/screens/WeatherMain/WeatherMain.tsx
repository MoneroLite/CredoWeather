import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { weatherContext } from "../../provider/weatherProvider/WeatherProvider";
import styles from "./WeatherMain.module.scss";
import WeatherMainSkeleton from "./weatherMainSkeleton/WeatherMainSkeleton";

const WeatherMain = () => {
  const [weather, isLoading] = useContext(weatherContext);

  // const now = new Date();
  // const formatter = new Intl.DateTimeFormat("ru-RU", {
  //   weekday: "long",
  //   timeZone: "Asia/Tokyo",
  // });

  // console.log("Intl.DateTimeFormat string: ", formatter.format(now));

  if (isLoading) {
    return <WeatherMainSkeleton />;
  }

  var date = new Date();
  console.log(date);

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var formattedTime = hours + ":" + minutes;
  console.log(formattedTime);

  return (
    <div className={styles.weatherWrap}>
      <div>
        <img
          className={styles.weatherIcon}
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="icon"
        />
        <p className={styles.degree}>{weather?.main.temp}&deg;</p>
        <p className={styles.feelDegree}>
          ощущается как {weather?.main.feels_like}&deg;
        </p>
        <p className={styles.country}>{weather?.name}</p>
      </div>
      <div>
        <p className={styles.time}>13:25</p>
        <p className={styles.description}>{weather?.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherMain;

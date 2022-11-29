import React, { useContext } from "react";
import { weatherContext } from "../../provider/weatherProvider/WeatherProvider";
import styles from "./WeatherFooter.module.scss";

const WeatherFooter = () => {
  const [weather, isLoading] = useContext(weatherContext);
  return (
    <div className={styles.container}>
      <div>{weather?.wind.speed} м/с</div>
      <div>{weather?.visibility} м</div>
      <div>{weather?.main.pressure} ГПа</div>
    </div>
  );
};

export default WeatherFooter;

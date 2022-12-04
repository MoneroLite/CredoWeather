import React, { useContext } from "react";
import { weatherContext } from "../../provider/weatherProvider/WeatherProvider";
import styles from "./WeatherHumidity.module.scss";
import Drop from "../../../assets/drop.svg";
import Cloud from "../../../assets/cloud.svg";
import WeatherHumiditySkeleton from "./weatherHumiditySkeleton/WeatherHumiditySkeleton";

const WeatherHumidity = () => {
  const [weather, isLoading] = useContext(weatherContext);

  if (isLoading) {
    return <WeatherHumiditySkeleton />;
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapInner}>
        <img className={styles.img} src={Drop} alt="drop" />
        <div>
          <p className={styles.title}>Влажность</p>
          <p className={styles.data}>{weather?.main.humidity}%</p>
        </div>
      </div>
      <div className={styles.wrapInner}>
        <img className={styles.img} src={Cloud} alt="cloud" />
        <div>
          <p className={styles.title}>Облачность</p>
          <p className={styles.data}>{weather?.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherHumidity;

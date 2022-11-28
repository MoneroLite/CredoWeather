import React, { useContext } from "react";
import { weatherContext } from "../../provider/weatherProvider/WeatherProvider";
import styles from "./WeatherSun.module.scss";
import Sunrise from "../../../assets/sunrise.svg";
import Sunset from "../../../assets/sunset.svg";

const WeatherSun = () => {
  const [weather, isLoading] = useContext(weatherContext);
  if (!weather) {
    return "";
  }

  function timeConverter(duration: number) {
    var date = new Date(duration * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var formattedTime = hours + ":" + minutes;
    return formattedTime;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.wrapInner}>
        <img className={styles.img} src={Sunrise} alt="drop" />
        <div>
          <p className={styles.title}>Восход</p>
          <p className={styles.data}>{timeConverter(weather?.sys.sunrise)}</p>
        </div>
      </div>
      <div className={styles.wrapInner}>
        <img className={styles.img} src={Sunset} alt="cloud" />
        <div>
          <p className={styles.title}>Закат</p>
          <p className={styles.data}>{timeConverter(weather?.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherSun;

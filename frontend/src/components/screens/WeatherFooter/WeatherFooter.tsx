import React, { useContext } from "react";
import { weatherContext } from "../../provider/weatherProvider/WeatherProvider";
import styles from "./WeatherFooter.module.scss";
import WeatherFooterSkeleton from "./weatherFooterSkeleton/WeatherFooterSkeleton";
import windIcon from "../../../assets/wind.svg";
import visionIcon from "../../../assets/vision.svg";
import pressureIcon from "../../../assets/pressure.svg";

const WeatherFooter = () => {
  const [weather, isLoading] = useContext(weatherContext);

  if (isLoading) {
    return <WeatherFooterSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemWrap}>
        <img src={windIcon} alt="wind icon" />
        <div>{weather?.wind.speed} м/с</div>
      </div>
      <div className={styles.itemWrap}>
        <img src={visionIcon} alt="vision icon" />
        <div>{weather?.visibility} м</div>
      </div>
      <div className={styles.itemWrap}>
        <img src={pressureIcon} alt="wind icon" />
        <div>{weather?.main.pressure} ГПа</div>
      </div>
    </div>
  );
};

export default WeatherFooter;

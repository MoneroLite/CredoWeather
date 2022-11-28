import React from "react";
import WeatherHumidity from "../screens/WeatherHumidity/WeatherHumidity";
import WeatherMain from "../screens/WeatherMain/WeatherMain";
import WeatherSun from "../screens/WeatherSun/WeatherSun";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.weatherPrimary}>
          <WeatherMain />
        </div>
        <div className={styles.weatherWrap}>
          <div className={styles.weatherLeft}>
            <div className={styles.wrapSecondary}>
              <div className={styles.weatherSecondaryHum}>
                <WeatherHumidity />
              </div>
              <div className={styles.weatherSecondarySun}>
                <WeatherSun />
              </div>
            </div>
            <div className={styles.weatherFooter}></div>
          </div>
          <div className={styles.weatherShedule}></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

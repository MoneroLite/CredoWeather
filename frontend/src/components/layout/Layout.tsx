import React from "react";
import WeatherMain from "../screens/WeatherMain/WeatherMain";
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
              <div className={styles.weatherSecondaryHum}></div>
              <div className={styles.weatherSecondarySun}></div>
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

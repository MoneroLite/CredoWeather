import React from "react";
import SkeletonIcon from "../../../../ui/Skeleton/Skeleton/SkeletonIcon";
import SkeletonText from "../../../../ui/Skeleton/Skeleton/SkeletonText";
import SkeletonContainer from "../../../../ui/Skeleton/SkeletonContainer/SkeletonContainer";
import styles from "./WeatherMainSkeleton.module.scss";

const WeatherMainSkeleton = () => {
  return (
    <SkeletonContainer>
      <div className={styles.weatherWrap}>
        <div className={styles.weatherInner}>
          <SkeletonIcon />
          <SkeletonText width="300px" height="75px" />
          <SkeletonText width="150px" height="18px" />
          <SkeletonText width="75px" height="25px" />
        </div>
        <div>
          <SkeletonText width="75px" height="25px" />
          <SkeletonText width="150px" height="25px" />
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default WeatherMainSkeleton;

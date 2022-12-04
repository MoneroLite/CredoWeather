import React from "react";
import SkeletonIcon from "../../../../ui/Skeleton/Skeleton/SkeletonIcon";
import SkeletonText from "../../../../ui/Skeleton/Skeleton/SkeletonText";
import SkeletonContainer from "../../../../ui/Skeleton/SkeletonContainer/SkeletonContainer";
import styles from "./WeatherSunSkeleton.module.scss";

const WeatherSunSkeleton = () => {
  return (
    <SkeletonContainer>
      <div className={styles.wrap}>
        <div className={styles.wrapInner}>
          <SkeletonIcon />
          <div>
            <SkeletonText />
            <SkeletonText />
          </div>
        </div>
        <div className={styles.wrapInner}>
          <SkeletonIcon />
          <div>
            <SkeletonText />
            <SkeletonText />
          </div>
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default WeatherSunSkeleton;

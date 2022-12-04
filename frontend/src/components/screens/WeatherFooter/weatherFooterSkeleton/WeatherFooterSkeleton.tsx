import React from "react";
import styles from "./WeatherFooterSkeleton.module.scss";
import SkeletonIcon from "../../../../ui/Skeleton/Skeleton/SkeletonIcon";
import SkeletonText from "../../../../ui/Skeleton/Skeleton/SkeletonText";
import SkeletonContainer from "../../../../ui/Skeleton/SkeletonContainer/SkeletonContainer";

const WeatherFooterSkeleton = () => {
  return (
    <SkeletonContainer>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <SkeletonIcon margin=" 0 0 5px 0" />
          <SkeletonText margin="0" height="10px" />
        </div>
        <div className={styles.inner}>
          <SkeletonIcon margin=" 0 0 5px 0" />
          <SkeletonText margin="0" height="10px" />
        </div>
        <div className={styles.inner}>
          <SkeletonIcon margin=" 0 0 5px 0" />
          <SkeletonText margin="0" height="10px" />
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default WeatherFooterSkeleton;

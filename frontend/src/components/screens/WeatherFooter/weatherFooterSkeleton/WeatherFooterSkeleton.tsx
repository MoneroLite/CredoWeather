import React from "react";
import styles from "./WeatherFooterSkeleton.module.scss";
import SkeletonIcon from "../../../../ui/Skeleton/Skeleton/SkeletonIcon";
import SkeletonText from "../../../../ui/Skeleton/Skeleton/SkeletonText";
import SkeletonContainer from "../../../../ui/Skeleton/SkeletonContainer/SkeletonContainer";

const WeatherFooterSkeleton = () => {
  return (
    <SkeletonContainer>
      <div className={styles.wrapper}>
        <div>
          <SkeletonIcon />
          <SkeletonText />
        </div>
        <div>
          <SkeletonIcon />
          <SkeletonText />
        </div>
        <div>
          <SkeletonIcon />
          <SkeletonText />
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default WeatherFooterSkeleton;

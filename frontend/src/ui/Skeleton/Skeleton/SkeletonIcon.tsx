import React from "react";
import styles from "./Skeleton.module.scss";

const SkeletonIcon = ({ width, height, margin }: any) => {
  return <div style={{ width, height, margin }} className={styles.icon}></div>;
};

export default SkeletonIcon;

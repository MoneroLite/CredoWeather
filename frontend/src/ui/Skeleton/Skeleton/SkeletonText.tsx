import React from "react";
import styles from "./Skeleton.module.scss";

const SkeletonText = ({ width, height, margin }: any) => {
  return <div style={{ width, height, margin }} className={styles.text}></div>;
};

export default SkeletonText;

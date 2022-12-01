import React, { FC, PropsWithChildren } from "react";
import styles from "./SkeletonContainer.module.scss";

const SkeletonContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.skeletonContainer}>{children}</div>;
};

export default SkeletonContainer;

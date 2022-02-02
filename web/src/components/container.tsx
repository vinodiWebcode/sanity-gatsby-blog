import React from "react";
import * as styles from "./container.module.css";
interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;

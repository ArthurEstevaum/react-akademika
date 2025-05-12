import React from "react";
import styles from "./contentContainer.module.css";

interface childrenProps {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: childrenProps) {
  return <main className={styles["container"]}>{children}</main>;
}

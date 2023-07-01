import React from "react";
import { useData } from "../context/DataContext";
import { EmailBody } from "./EmailBody";
import { CardLayout } from "./CardLayout";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  const { body } = useData();
  return (
    <div className={styles.flex}>
      <div className={styles.blo}>
        <CardLayout />
      </div>
      {body.id && <EmailBody />}
    </div>
  );
};

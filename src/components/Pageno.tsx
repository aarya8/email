import React from "react";
import { useData } from "../context/DataContext";
import styles from "./pageno.module.css";
export const Pageno = () => {
  const { dispatch } = useData();
  function changePage(page: number) {
    dispatch({
      type: "CHANGE_PAGENO",
      payload: page,
    });
  }
  return (
    <div className={styles.pageContainer}>
      <span>Page no:</span>
      <span onClick={() => changePage(1)} className={`${styles.circle}`}>
        1
      </span>
      <span onClick={() => changePage(2)} className={`${styles.circle}`}>
        2
      </span>
    </div>
  );
};

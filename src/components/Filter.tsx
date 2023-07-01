import React from "react";
import { useData } from "../context/DataContext";
import styles from "./filter.module.css";

export const Filter = () => {
  const { filter, dispatch } = useData();
  function addFilterData(filter: string) {
    dispatch({
      type: "ADD_FILTER",
      payload: filter,
    });
  }

  return (
    <>
      <ul className={styles.filterContainer}>
        <li>Filter By :</li>
        <li
          className={
            filter === "read" ? styles.activeButton : styles.filterButton
          }
          onClick={() => addFilterData("read")}
        >
          Read
        </li>
        <li
          className={
            filter === "unread" ? styles.activeButton : styles.filterButton
          }
          onClick={() => addFilterData("unread")}
        >
          Unread
        </li>
        <li
          className={
            filter === "favorites" ? styles.activeButton : styles.filterButton
          }
          onClick={() => addFilterData("favorites")}
        >
          Favorites
        </li>
        <li className={styles.filterButton} onClick={() => addFilterData("")}>
          Clear Filter
        </li>
      </ul>
    </>
  );
};

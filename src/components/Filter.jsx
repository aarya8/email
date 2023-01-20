import { useEmail } from "../context/EmailContext";
import styles from "./filter.module.css";

export const Filter = () => {
  const { filter, dispatch } = useEmail();
  function addFilterData(filter) {
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
      </ul>
    </>
  );
};

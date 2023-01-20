import { useEmail } from "../context/EmailContext";
import styles from "./pageno.module.css";
export const Pageno = () => {
  const { dispatch, pageno } = useEmail();
  function changePage(page) {
    dispatch({
      type: "CHANGE_PAGENO",
      payload: page,
    });
  }
  console.log(pageno);
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

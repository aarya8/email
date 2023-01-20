import { useEmail } from "../context/EmailContext";
import { DateComponent } from "./Date";
import styles from "./EmailBody.module.css";

export const EmailBody = () => {
  const { apiData, body, dispatch } = useEmail();
  const ToggleFavorite = () => {
    dispatch({
      type: "TOGGLE_FAVORITES",
      payload: body.id,
    });
  };
  const email = apiData.filter((item) => item.id === body.id)[0];
  console.log(email);
  return (
    <div className={styles.body}>
      <figure className={styles.figure}>
        <span className={styles.avatarWord}>{email.from.name[0]}</span>
      </figure>
      <div>
        <h3 className={styles.subject}>{email.subject}</h3>
        <p>
          <DateComponent data={email} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: body.body }} />
        <button onClick={ToggleFavorite} className={styles.favoriteButton}>
          Mark as Favorite
        </button>
      </div>
    </div>
  );
};

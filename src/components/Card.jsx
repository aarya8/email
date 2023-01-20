import axios from "axios";
import { useEmail } from "../context/EmailContext";
import styles from "./card.module.css";
import { DateComponent } from "./Date";
export const Card = ({ data }) => {
  const { dispatch } = useEmail();

  async function addRead(id) {
    const { data: bodyData } = await axios.get(
      `https://flipkart-email-mock.now.sh/?id=${id}`
    );
    dispatch({
      type: "UPDATE_BODY",
      payload: bodyData,
    });
    dispatch({
      type: "EMAIL_READ",
      payload: data.id,
    });
  }
  return (
    <section
      onClick={() => addRead(data.id)}
      className={`${styles.card} ${data.read ? styles.read : ""}
      
       
      }`}
    >
      <figure className={styles.figure}>
        <span className={styles.avatarWord}>{data.from.name[0]}</span>
      </figure>
      <div>
        <p className={styles.m0}>
          From:{" "}
          <span
            className={styles.bold}
          >{`${data.from.name} <${data.from.email}>`}</span>
        </p>
        <p className={styles.m0}>
          Subject: <span className={styles.bold}>{data.subject}</span>
        </p>
        <p className={`${styles.mb0} ${styles.description}`}>
          {data.short_description}
        </p>
        <p className={styles.mb0}>
          {" "}
          <DateComponent data={data} />
          <span className={styles.favorite}>
            {data.favorite ? "Favorite" : ""}
          </span>
        </p>
      </div>
    </section>
  );
};

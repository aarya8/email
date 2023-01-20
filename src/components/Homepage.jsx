import { useEmail } from "../context/EmailContext";
import { EmailBody } from "./EmailBody";
import { CardLayout } from "./CardLayout";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  const { body } = useEmail();
  return (
    <div className={styles.flex}>
      <div className={styles.blo}>
        <CardLayout />
      </div>
      {body && <EmailBody />}
    </div>
  );
};

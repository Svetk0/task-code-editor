import { useState } from "react";
import dt from "../../constants/data.json";
import styles from "./Task.module.scss";

function Task() {
  const tips = dt.task.tips.description.split(";");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <section className={styles.container}>
      <article
        className={`${styles.wrapperColumn} ${styles.wrapperColumn__task}`}
      >
        <h3> {dt.task.title}</h3>
        <div>{dt.task.description}</div>
      </article>
      <article
        className={`${styles.wrapperColumn} ${styles.wrapperColumn__tips}`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <h3>{dt.task.tips.title}</h3>
        {!isOpened && <p>{dt.task.tips.subtitle} </p>}
        {isOpened && (
          <ol className={styles.tips}>
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        )}
      </article>
    </section>
  );
}

export default Task;

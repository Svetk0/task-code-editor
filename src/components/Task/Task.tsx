import dt from "../../constants/data.json";
import styles from "./Task.module.scss";

function Task() {
  const tips = dt.task.tips.description.split(";");
  console.log("tips", tips);
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
      >
        <h3> {dt.task.tips.title}</h3>
        <ol className={styles.tips}>
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
      </article>
    </section>
  );
}

export default Task;

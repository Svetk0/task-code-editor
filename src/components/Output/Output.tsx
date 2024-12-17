import dt from "../../constants/data.json";
import styles from "./Output.module.scss";

type Props = {
  output?: string;
};
function Output({ output }: Props) {
  return (
    <section className={styles.container}>
      <h2> {dt.output.title}</h2>
      {output === "" ? (
        <div
          className={`${styles.outputBlock} ${styles.outputBlock_placeholder}`}
        >
          {dt.output.placeholder}
        </div>
      ) : (
        <div className={styles.outputBlock}>{output}</div>
      )}
    </section>
  );
}

export default Output;

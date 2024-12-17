import { Dispatch } from "react";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import dt from "../../constants/data.json";
import styles from "./Output.module.scss";

type Props = {
  output?: string;
  //setLanguage: Dispatch<string>;
};
function Output({ output }: Props) {
  return (
    <section className={styles.container}>
      <h2>Output</h2>
      <div className={styles.outputBlock}>{output}</div>
    </section>
  );
}

export default Output;

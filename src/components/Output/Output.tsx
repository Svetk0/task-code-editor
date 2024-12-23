import { useState } from "react";
import { fetchExecuteCode } from "../../api/api.ts";
import dt from "../../constants/data.json";
import styles from "./Output.module.scss";
type Props = {
  code?: string;
  language: string;
};
function Output({ code, language }: Props) {
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    setIsLoading(true);
    const executeCode = await fetchExecuteCode({
      body: code,
      language: language,
    });

    if (executeCode) setIsLoading(false);
    if (executeCode.run.code === 0) {
      setIsError(false);
      setOutput(executeCode.run.output);
    } else {
      setIsError(true);
      setOutput("SyntaxError: Unexpected token");
      console.error(executeCode.run.output);
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapperRow}>
        <h2> {dt.output.title}</h2>
        <button onClick={runCode}>
          {isLoading ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            dt.output.button
          )}
        </button>
      </div>

      {output === "" ? (
        <div
          className={`${styles.outputBlock} ${styles.outputBlock_placeholder}`}
        >
          {dt.output.placeholder}
        </div>
      ) : (
        <div
          className={
            isError
              ? `${styles.outputBlock} ${styles.outputBlock_error}`
              : `${styles.outputBlock}`
          }
        >
          {output}
        </div>
      )}
    </section>
  );
}

export default Output;

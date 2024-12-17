import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";

import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { apiPost } from "../../api/api.ts";
import Output from "../Output/Output.tsx";

function CodeEditor(errorMode) {
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("javascript");
  const [output, setOutput] = useState<string>("");
  const [endpoint, setEndpoint] = useState<string>("/api");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  const runCode = async () => {
    const postData = await apiPost({ body: value, endpoint: endpoint });

    if (postData.data) {
      setOutput(postData.data.output);
    } else {
      setOutput("SyntaxError: Unexpected token");
    }

    console.log("run code", postData, postData.error);
  };
  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);
  useEffect(() => {
    const errMode = Object.values(errorMode)[0];
    console.log(Object.values(errorMode)[0]);
    if (errMode === true) {
      setEndpoint("/appi");
    } else {
      setEndpoint("/api");
    }
  }, [errorMode]);

  return (
    <section className={styles.container}>
      <div className={`${styles.wrapperRow} ${styles.wrapperRow_buttons}`}>
        <LanguageSelect language={language} setLanguage={setLanguage} />
        <button onClick={runCode}>Run Code</button>
      </div>
      <div className={styles.wrapperRow}>
        <div className={styles.wrapperColumn}>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="100%"
            width="100%"
            theme="vs-dark"
            language={language}
            defaultValue={String(CODE_SNIPPETS[language as keyof Object])}
            onMount={onMount}
            value={value}
            onChange={(value) => {
              setValue(value);
              console.log("value", value);
            }}
          />
        </div>

        <div className={styles.wrapperColumn}>
          <Output output={output} />
        </div>
      </div>
    </section>
  );
}

export default CodeEditor;

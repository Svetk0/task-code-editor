import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
//import dt from "../../constants/data.json";
import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { apiGet, apiPost } from "../../api/api.ts";
import Output from "../Output/Output.tsx";

const CodeEditor = () => {
  //const dt = staticData;
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("javascript");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  const runCode = async () => {
    const postData = await apiPost({ body: value, endpoint: "/appi" });
    const fetchData = await apiGet("/posts");

    console.log("run code", fetchData, postData);
  };
  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);

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
          <Output output={value} />
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;

import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";

import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

import { fetchExecuteCode } from "../../api/api.ts";
import Output from "../Output/Output.tsx";

function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("JavaScript");
  const [output, setOutput] = useState<string>("");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  const runCode = async () => {
    const executeCode = await fetchExecuteCode({
      body: value,
      language: language,
    });

    console.log("execute", executeCode);
    if (executeCode.run.code === 0) {
      setOutput(executeCode.run.output);
    } else {
      setOutput("SyntaxError: Unexpected token");
      console.error(executeCode.run.output);
    }
  };
  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapperRow}>
        <div className={styles.wrapperColumn}>
          <div className={`${styles.wrapperRow} ${styles.wrapperRow__buttons}`}>
            <LanguageSelect language={language} setLanguage={setLanguage} />
            <button onClick={runCode}>Run Code</button>
          </div>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            width="100%"
            theme="vs-dark"
            language={language.toLowerCase()}
            defaultValue={String(CODE_SNIPPETS[language as keyof Object])}
            onMount={onMount}
            value={value}
            onChange={(value) => {
              setValue(value);
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

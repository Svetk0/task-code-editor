import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";

import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

import Output from "../Output/Output.tsx";

function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("JavaScript");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapperRow}>
        <div className={styles.wrapperColumn}>
          <LanguageSelect language={language} setLanguage={setLanguage} />
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

        <div
          className={`${styles.wrapperColumn} ${styles.wrapperColumn_shorts}`}
        >
          <Output language={language} code={value} />
        </div>
      </div>
    </section>
  );
}

export default CodeEditor;

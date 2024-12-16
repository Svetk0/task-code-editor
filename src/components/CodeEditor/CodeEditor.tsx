import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
//import dt from "../../constants/data.json";
import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const CodeEditor = () => {
  //const dt = staticData;
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("go");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);
  return (
    <section className={styles.container}>
      <LanguageSelect language={language} setLanguage={setLanguage} />
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        height="60vh"
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
    </section>
  );
};

export default CodeEditor;

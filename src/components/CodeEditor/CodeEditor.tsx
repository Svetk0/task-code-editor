import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
//import dt from "../../constants/data.json";
import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { api } from "../../api/api.js";

const CodeEditor = () => {
  //const dt = staticData;
  const editorRef = useRef();
  const [value, setValue] = useState<string | undefined>("");
  const [language, setLanguage] = useState<string>("go");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };
  const runCode = async () => {
    const fetchData = await api();
    console.log("run code", fetchData);
  };
  useEffect(() => {
    setValue(String(CODE_SNIPPETS[language as keyof Object]));
  }, [language]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const [positionsData, languagesData] = await Promise.all([
  //           getPositions(),
  //           getLanguages(),
  //         ]);
  //         //@ts-ignore
  //         setPositions(positionsData);
  //         //@ts-ignore
  //         setLanguages(languagesData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
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
      <button onClick={runCode}>Run Code</button>
    </section>
  );
};

export default CodeEditor;

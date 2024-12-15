import { Editor } from "@monaco-editor/react";
//import dt from "../../constants/data.json";
import styles from "./CodeEditor.module.scss";
import { CODE_SNIPPETS } from "../../constants/codeSnippets";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
const CodeEditor = () => {
  //const dt = staticData;
  return (
    <section className={styles.container}>
      <LanguageSelect />
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        height="75vh"
        theme="vs-dark"
        language={"javascript"}
        defaultValue={CODE_SNIPPETS["javascript"]}
        // onMount={onMount}
        // value={value}
        // onChange={(value) => setValue(value)}
      />
    </section>
  );
};

export default CodeEditor;

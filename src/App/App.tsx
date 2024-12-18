import { useState } from "react";
import Task from "../components/Task/Task";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import dt from "../constants/data.json";
import "./App.scss";

function App() {
  const [errorMode, setErrorMode] = useState<boolean>(false);
  return (
    <>
      <header>
        <button
          className={errorMode ? `button_error` : ""}
          onClick={() => setErrorMode(!errorMode)}
        >
          {errorMode ? dt.error_mode.on : dt.error_mode.off}
        </button>
      </header>
      <main>
        <Task />
        <CodeEditor errorMode={errorMode} />
      </main>
    </>
  );
}

export default App;

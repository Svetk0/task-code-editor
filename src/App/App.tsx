import { useState } from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";
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
          {errorMode ? "Disable Error Mode" : "Enable Error Mode"}
        </button>
      </header>
      <main>
        <CodeEditor errorMode={errorMode} />
      </main>
    </>
  );
}

export default App;

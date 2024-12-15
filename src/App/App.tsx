import { useState } from "react";
import "./App.css";
import CodeEditor from "../components/CodeEditor/CodeEditor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CodeEditor />
    </>
  );
}

export default App;

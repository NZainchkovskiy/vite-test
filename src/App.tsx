import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit1 <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="webpart1.html" target="_self" rel="noopener noreferrer">
            WebPart1
          </a>
          {" | "}
          <a className="App-link" href="webpart2.html" target="_self" rel="noopener noreferrer">
            WebPart2
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

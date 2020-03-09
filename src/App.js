import React from "react";
import "./App.css";
import { InputArea } from "./view/InputArea";

/**
 * App is the root wrapper around the application.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputArea />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { InputArea } from "./view/InputArea";
import { Header } from "./view/Header";

/**
 * App is the root wrapper around the application.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <InputArea />
      </header>
    </div>
  );
}

export default App;

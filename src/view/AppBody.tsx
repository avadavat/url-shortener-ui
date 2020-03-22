import React from "react";
import { Header } from "./Header";
import { InputArea } from "./InputArea";

export const AppBody = React.memo(function AppBody() {
  return (
    <div className="App">
      <Header />
      <header className="App-header" style={{ paddingTop: "35%" }}>
        <InputArea />
      </header>
    </div>
  );
});

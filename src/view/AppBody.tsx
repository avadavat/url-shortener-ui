import React from "react";
import { Header, InputArea } from ".";
import { sendDecodeRequest } from "../util";

export const AppBody = React.memo(function AppBody() {
  React.useEffect(() => {
    // Make a call to the backend to wake it up on app load, since
    // Heroku sleeps apps by default.
    sendDecodeRequest("");
  }, []);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <InputArea />
      </header>
    </div>
  );
});

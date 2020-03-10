import React from "react";
import { InputBox } from "./InputBox";

const axios = require("axios");

const thisHost = window.location.origin;

const inputAreaStyle: React.CSSProperties = {
  fontSize: 18
};

export const InputArea = React.memo(function InputArea() {
  const [query, setQuery] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onClick = () => {
    axios
      .get("/encode/" + query)
      .then(function(res: any) {
        const shortLink: string = res.data;
        const fullLink = `${thisHost}/${shortLink}`;
        setMessage(fullLink);
      })
      .catch(function() {
        setMessage("error. text dan for help");
      });
  };

  return (
    <div className="rowC">
      <InputBox query={query} onQueryChange={onQueryChange} />
      <button onClick={onClick}>Encode</button>
      <div>{message}</div>
    </div>
  );
});

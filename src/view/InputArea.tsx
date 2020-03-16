import React from "react";
import { InputBox } from "./InputBox";
import { InputButton } from "./InputButton";

const axios = require("axios");

const thisHost = window.location.origin;

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
      <InputButton onClick={onClick} />
      <div>{message}</div>
    </div>
  );
});

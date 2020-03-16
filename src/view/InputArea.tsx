import React from "react";
import { InputBox } from "./InputBox";
import { InputButton } from "./InputButton";
import { validURL } from "../util/validURL";

const axios = require("axios");

const thisHost = window.location.origin;

const sendEncodeRequest = (
  query: string,
  callback: (response: string) => void
) => {
  if (!validURL(query)) {
    // Try to be nice
    query = "http://" + query;
  }

  if (!validURL(query)) {
    callback("The url entered is invalid");
    return;
  }

  axios
    .get("/encode/" + query)
    .then(function(res: any) {
      const shortLink: string = res.data;
      const fullLink = `${thisHost}/${shortLink}`;
      callback(fullLink);
    })
    .catch(function() {
      callback("error. text dan for help");
    });
};

export const InputArea = React.memo(function InputArea() {
  const [query, setQuery] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onClick = () => {
    sendEncodeRequest(query, setMessage);
  };

  return (
    <div className="rowC">
      <InputBox query={query} onQueryChange={onQueryChange} />
      <InputButton onClick={onClick} />
      <div>{message}</div>
    </div>
  );
});

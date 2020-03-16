import React from "react";
import { InputBox } from "./InputBox";
import { InputButton } from "./InputButton";
import { MessageArea } from "./MessageArea";
import { validURL } from "../util/validURL";

const axios = require("axios");
const thisHost = window.location.origin;

const invalidUrlErrorMessage = "The url entered is invalid.";
const responseErrorMessage = "error. text dan for help";

const sendEncodeRequest = (
  query: string,
  callback: (response: string) => void
) => {
  if (!validURL(query)) {
    // Try to be nice
    query = "http://" + query;
  }

  if (!validURL(query)) {
    callback(invalidUrlErrorMessage);
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
      callback(responseErrorMessage);
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
      <MessageArea message={message} />
    </div>
  );
});

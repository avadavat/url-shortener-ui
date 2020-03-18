import React from "react";
import { InputBox } from "./InputBox";
import { InputButton } from "./InputButton";
import { MessageArea, MessageStatus } from "./MessageArea";
import { validURL } from "../util/validURL";

const axios = require("axios");
const thisHost = window.location.origin;

const sendEncodeRequest = async (
  query: string
): Promise<[MessageStatus, string]> => {
  if (!validURL(query)) {
    query = `http://${query}`;
  }

  if (!validURL(query)) {
    return [MessageStatus.INVALID, ""];
  }

  try {
    const response = await axios.get("/encode/" + query);
    const shortLink: string = response.data;
    const fullLink = `${thisHost}/${shortLink}`;
    return [MessageStatus.SUCCESS, fullLink];
  } catch (e) {
    return [MessageStatus.ERROR, ""];
  }
};

export const InputArea = React.memo(function InputArea() {
  const [query, setQuery] = React.useState<string>("");
  const [shortLink, setShortLink] = React.useState<string>("");
  const [messageStatus, setMessageStatus] = React.useState<MessageStatus>(
    MessageStatus.DEFAULT
  );

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onClick = async () => {
    const [ms, m] = await sendEncodeRequest(query);
    setMessageStatus(ms);
    setShortLink(m);
  };

  return (
    <div className="rowC">
      <InputBox query={query} onQueryChange={onQueryChange} />
      <InputButton onClick={onClick} />
      <MessageArea status={messageStatus} shortLink={shortLink} />
    </div>
  );
});

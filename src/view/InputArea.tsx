import React from "react";
import { InputBox } from "./InputBox";
import { InputButton } from "./InputButton";
import { MessageArea, MessageStatus } from "./MessageArea";
import { validURL } from "../util/validURL";

const axios = require("axios");
const thisHost = window.location.origin;

const inputAreaStyle: React.CSSProperties = {
  top: 300,
  position: "relative"
};

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
    <div className="rowC" style={inputAreaStyle}>
      <div
        style={{
          fontSize: 18,
          textAlign: "left",
          paddingBottom: 5,
          paddingLeft: 7
        }}
      >
        Enter a long URL to make short:
      </div>
      <InputBox query={query} onQueryChange={onQueryChange} />
      <InputButton onClick={onClick} />
      <MessageArea status={messageStatus} shortLink={shortLink} />
    </div>
  );
});

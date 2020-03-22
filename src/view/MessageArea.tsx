import React from "react";
import { MessageStatus } from "../util/requests";

const invalidUrlErrorMessage = "The url entered is invalid.";
const responseErrorMessage = "error. text dan for help";
const defaultMessage = "";

const messageAreaStyle: React.CSSProperties = {
  marginTop: 10
};

interface MessageAreaProps {
  status: MessageStatus;
  shortLink?: string;
}

const getMessage = (status: MessageStatus, shortLink?: string) => {
  if (status === MessageStatus.ERROR) {
    return responseErrorMessage;
  } else if (status === MessageStatus.INVALID) {
    return invalidUrlErrorMessage;
  } else if (status === MessageStatus.SUCCESS) {
    return shortLink;
  }

  return defaultMessage;
};

export const MessageArea = React.memo(function MessageArea(
  props: MessageAreaProps
) {
  const { status, shortLink } = props;

  return <div style={messageAreaStyle}>{getMessage(status, shortLink)}</div>;
});

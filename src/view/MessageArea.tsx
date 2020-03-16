import React from "react";

const messageAreaStyle: React.CSSProperties = {
  marginTop: 10
};

interface MessageAreaProps {
  message: string;
}

export const MessageArea = React.memo(function MessageArea(
  props: MessageAreaProps
) {
  return <div style={messageAreaStyle}>{props.message}</div>;
});

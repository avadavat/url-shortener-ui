import React from "react";

const inputAreaStyle: React.CSSProperties = {
  fontSize: 18
};

export const InputArea = React.memo(function InputArea() {
  const [message, setMessage] = React.useState<string>("");

  const onClick = () => {
    // todo: implement onClick
    setMessage("clicky");
  };

  return (
    <div className="rowC">
      <input style={inputAreaStyle} />
      <button onClick={onClick}>Encode</button>
      <div>{message}</div>
    </div>
  );
});

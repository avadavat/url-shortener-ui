import React from "react";

const inputAreaStyle: React.CSSProperties = {
  fontSize: 18
};

export const InputArea = React.memo(function InputArea() {
  const [message, setMessage] = React.useState<string>("");

  const onClick = () => {
    // todo: implement onClick
    // setMessage("clicky");

    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
      setMessage(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open("GET", "/encode/something");
    // send the request
    xhr.send();
  };

  return (
    <div className="rowC">
      <input style={inputAreaStyle} />
      <button onClick={onClick}>Encode</button>
      <div>{message}</div>
    </div>
  );
});

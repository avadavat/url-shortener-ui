import React from "react";

const headerStyle: React.CSSProperties = {
  height: 50,
  backgroundColor: "#e0e0e0",
  color: "black",
  textAlign: "left"
};

const imgStyle: React.CSSProperties = {
  height: 50
};

const textStyle: React.CSSProperties = {
  fontFamily: "Helvetica,Verdana,sans-serif",
  fontSize: 23,
  position: "absolute",
  paddingTop: 11,
  paddingLeft: 10
};

export const Header = React.memo(function Header() {
  return (
    <div style={headerStyle}>
      <a href="/">
        <img
          alt="Blackbird"
          src={window.location.origin + "/blackbird.png"}
          style={imgStyle}
        />
      </a>
      <span style={textStyle}>Short Link</span>
    </div>
  );
});

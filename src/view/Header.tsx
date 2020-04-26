import React from "react";

const headerStyle: React.CSSProperties = {
  height: 64,
  backgroundColor: "#f7f7f7",
  color: "black",
  textAlign: "left",
  boxShadow: "rgb(200, 200, 200) 0px 2px 8px"
};

const imgStyle: React.CSSProperties = {
  height: 64,
  paddingLeft: 10
};

const textStyle: React.CSSProperties = {
  fontFamily: "Helvetica,Verdana,sans-serif",
  fontSize: 23,
  position: "absolute",
  paddingTop: 17,
  paddingLeft: 10,
  verticalAlign: "middle"
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

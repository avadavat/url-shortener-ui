import React from "react";
import { ToggleState } from "./InputButton";

const getBackgroundColor = (state: ToggleState): string => {
  switch (state) {
    case ToggleState.CLICK:
      return "#e0e0e0";
    case ToggleState.HOVER:
      return "#f5f5f5";
    default:
      return "white";
  }
};

export const getInputButtonStyle = (
  state: ToggleState
): React.CSSProperties => {
  return {
    fontSize: 20,
    borderRadius: 20,
    marginLeft: 5,
    outline: "none",
    backgroundColor: getBackgroundColor(state)
  };
};

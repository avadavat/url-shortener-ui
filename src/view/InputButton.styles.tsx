import React from "react";
import { ToggleState } from "./InputButton";

const getBackgroundColor = (state: ToggleState): string => {
  switch (state) {
    case ToggleState.CLICK:
      return "#A0A0A0";
    case ToggleState.HOVER:
      return "#D0D0D0";
    default:
      return "#E0E0E0";
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

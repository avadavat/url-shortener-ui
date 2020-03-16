import React from "react";
import { getInputButtonStyle } from "./InputButton.styles";

interface InputButtonProps {
  onClick: () => void;
}

export enum ToggleState {
  DEFAULT,
  HOVER,
  CLICK
}

export const InputButton = React.memo(function InputButton(
  props: InputButtonProps
) {
  const [toggleState, setToggleState] = React.useState<ToggleState>(
    ToggleState.DEFAULT
  );

  const onMouseEnter = () => {
    setToggleState(ToggleState.HOVER);
  };

  const onMouseLeave = () => {
    setToggleState(ToggleState.DEFAULT);
  };

  const onMouseDown = () => {
    setToggleState(ToggleState.CLICK);
  };

  const onMouseUp = () => {
    setToggleState(ToggleState.DEFAULT);

    props.onClick();
  };

  return (
    <button
      style={getInputButtonStyle(toggleState)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      Encode
    </button>
  );
});

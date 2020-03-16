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
  const { onClick } = props;
  const [toggleState, setToggleState] = React.useState<ToggleState>(
    ToggleState.DEFAULT
  );

  const onMouseEnter = () => {
    setToggleState(ToggleState.HOVER);
  };

  const onMouseLeave = () => {
    setToggleState(ToggleState.DEFAULT);
  };

  return (
    <button
      onClick={onClick}
      style={getInputButtonStyle(toggleState)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Encode
    </button>
  );
});

import React from "react";

const inputButtonStyle: React.CSSProperties = {
  fontSize: 20,
  borderRadius: 20,
  marginLeft: 5
};

interface InputButtonProps {
  onClick: () => void;
}

export const InputButton = React.memo(function InputButton(
  props: InputButtonProps
) {
  const { onClick } = props;

  return (
    <button onClick={onClick} style={inputButtonStyle}>
      Encode
    </button>
  );
});

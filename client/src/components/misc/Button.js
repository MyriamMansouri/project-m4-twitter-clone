import React from "react";
import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import { STYLE } from "./constant";

const Btn = styled(UnstyledButton)`
  background-color: ${STYLE.primary};
  color: white;
  padding: 12px 20px;
  font-weight: bold;
  border-radius: ${STYLE.borderRadius};
  text-align: center;
  &:hover {
    background-color: ${STYLE.primaryDark};
  }
  &.disabled {
    cursor: default;
    background-color: ${STYLE.primaryLight};
  }
`;
const Button = ({ fullWidth, disabled, children }) => {
  return (
    <Btn disabled={disabled} style={fullWidth ? { width: "100%" } : null} className={disabled ? 'disabled' : null}>
      {children}
    </Btn>
  );
};

export default Button;

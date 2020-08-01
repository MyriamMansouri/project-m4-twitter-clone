import React from "react";
import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import { STYLE } from "./constant";

const Btn = styled(UnstyledButton)`
  background-color: ${STYLE.primary};
  font-size:1.1rem;
  color: white;
  padding: 15px 20px;
  font-weight: bold;
  border-radius: ${STYLE.borderRadius};
  text-align:center;
  &:hover {
    background-color: ${STYLE.primaryDark};
  }
`;
const Button = ({ fullWidth, children }) => {
  return <Btn style={fullWidth ? { width: "100%" } : null}>{children}</Btn>;
};

export default Button;

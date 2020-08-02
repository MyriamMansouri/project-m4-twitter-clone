import React from "react";
import styled from "styled-components";
import { STYLE } from "../misc/constant";

const Username = styled.span`
  margin-right: 6px;
  font-size: ${STYLE.smallFontSize};
  color: ${STYLE.neutral};
`;
const Handle = ({ username }) => {
  return <Username>@{username}</Username>;
};

export default Handle;

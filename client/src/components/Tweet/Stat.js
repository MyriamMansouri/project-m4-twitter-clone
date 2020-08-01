import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  margin-left: 20px;
  position:absolute;
`;

const Stat = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Stat;

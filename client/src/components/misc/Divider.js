import React from "react";
import styled from "styled-components";

const DividerDiv = styled.div`
  background: rgb(230, 236, 240);
`;

const Divider = ({ vertical }) => {
  return (
    <DividerDiv
      style={{
        height: vertical ? 'inherit' : "1px",
        width: vertical ? "1px" : 'inherit',
      }}
    />
  );
};

export default Divider;

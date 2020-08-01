import React from "react";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(0,0)
  }
  to {
    transform: scale(1,1)
  }
`;

const fade = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`;

const Wrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${scale} 300ms forwards, ${fade} 500ms forwards;
`;

const PoppingCircle = ({ size, color, children }) => {
  return (
    <Wrapper style={{ width: size, height: size, backgroundColor: color }}>
      {children}
    </Wrapper>
  );
};

export default PoppingCircle;

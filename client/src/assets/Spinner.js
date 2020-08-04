import React from "react";
import { Loader } from "./Icons";
import styled, { keyframes } from "styled-components";
import {STYLE } from '../components/misc/constant'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  width: 23px;
  height: 23px;
  animation: ${rotate} 2s linear infinite;
`;

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  margin:${STYLE.spacingTweet};
`;
const Spinner = () => {
  return (
    <Wrapper>
      <Rotate>
        <Loader size={22} />
      </Rotate>
    </Wrapper>
  );
};

export default Spinner;

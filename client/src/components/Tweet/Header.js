import React from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";
import Timestamp from "./Timestamp";
import Handle from "../misc/Handle";

import {STYLE } from '../misc/constant'

const Header = () => {
  const { displayName, username } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <DisplayName>{displayName}</DisplayName>
      <Handle username = {username}></Handle>
      &middot;
      <Timestamp />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin-bottom: ${STYLE.marginBottom};
`;

const DisplayName = styled.span`
  margin-right: 6px;
  font-size: ${STYLE.smallFontSize};
  font-weight: bold;
`;



export default Header;

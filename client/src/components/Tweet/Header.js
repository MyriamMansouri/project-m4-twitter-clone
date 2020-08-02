import React from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";
import Timestamp from './Timestamp'

import {STYLE} from '../misc/constant'

const Header = () => {
  const { displayName, username } = React.useContext(
    TweetContext
  );

  return (
    <Wrapper>
        <DisplayName>{displayName}</DisplayName>
        <Username>@{username}</Username>
        &middot;
        <Timestamp/>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin-bottom:10px;
`;


const DisplayName = styled.span`
  margin-right: 6px;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.span`
  margin-right: 6px;
  font-size: 15px;
  line-height: 20px;
  color: ${STYLE.neutral};
`;

export default Header;

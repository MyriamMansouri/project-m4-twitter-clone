import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";
import Timestamp from "./Timestamp";
import Handle from "../misc/Handle";

import { STYLE } from "../misc/constant";

const Header = () => {
  const { displayName, username } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <DisplayName>
        <Link to={`/${username}`} onClick={(e) => e.stopPropagation()}>
          {displayName}
        </Link>
      </DisplayName>
      <Handle username={username}></Handle>
      &middot;
      <Timestamp />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin-bottom: ${STYLE.marginBottom};
  z-index:0;
`;

const DisplayName = styled.span`
  margin-right: 6px;
  font-size: ${STYLE.smallFontSize};
  font-weight: bold;
  position: relative;
  z-index: 1;
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TweetContext } from "../Tweet/TweetContext";
import Handle from "../misc/Handle";

import { STYLE } from "../misc/constant";
import Avatar from "../misc/Avatar";

const Header = () => {
  const { displayName, username, avatarSrc } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <Avatar avatarSrc={avatarSrc} />
      <NameWrapper>
        <DisplayName>
          <Link to={`/${username}`} onClick={(e) => e.stopPropagation()}>
            {displayName}
          </Link>
        </DisplayName>
        <Handle username={username}></Handle>
      </NameWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin-bottom: ${STYLE.marginBottom};
  z-index: 0;
`;

const DisplayName = styled.div`
  margin-right: 6px;
  font-size: ${STYLE.smallFontSize};
  font-weight: bold;
  position: relative;
  z-index: 1;
  &:hover {
    text-decoration: underline;
  }
`;

const NameWrapper = styled.div`
  margin-left: ${STYLE.spacingTweet};
`;

export default Header;

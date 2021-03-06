import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { TweetContext } from "./TweetContext";
import Timestamp from "./Timestamp";
import Handle from "../misc/Handle";
import Tooltip from "./Tooltip";
import { STYLE } from "../misc/constant";

const Header = () => {
  const { displayName, username } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <WhiteTippy delay={100} content={<Tooltip profileId={username} />}>
        <DisplayName>
          <Link to={`/${username}`} onClick={(e) => e.stopPropagation()}>
            {displayName}
          </Link>
        </DisplayName>
      </WhiteTippy>
      <Handle username={username}></Handle>
      &middot;
      <Timestamp />
    </Wrapper>
  );
};

const WhiteTippy = styled(Tippy)`
  padding: ${STYLE.spacingTweet};
  background-color: white;
  color: black;
  box-shadow: 0px 0px 14px 0px ${STYLE.neutralLight};
  /* Styling the arrow for different placements */
  &[data-placement^="top"] > .tippy-arrow::before {
    border-top-color: white;
  }
`;

const Wrapper = styled.header`
  display: flex;
  margin-bottom: ${STYLE.marginBottom};
  z-index: 0;
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

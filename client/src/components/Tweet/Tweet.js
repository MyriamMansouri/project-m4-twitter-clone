import React from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import TweetMedia from "./TweetMedia";

import { TweetContext } from "./TweetContext";

import { STYLE, BORDER } from "../misc/constant";
import Avatar from "./Avatar";
import RetweetFrom from "./RetweetFrom";

const Tweet = () => {
  const { status, mediaUrl, retweetFrom } = React.useContext(TweetContext);

  return (
    <TweetWrapper>
     { retweetFrom && <RetweetFrom />}
      <FlexWrapper>
        <Avatar />
        <Wrapper>
          <Header />
          <TweetContents>{status}</TweetContents>
          {mediaUrl && <TweetMedia />}
          <ActionBar />
        </Wrapper>
      </FlexWrapper>
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  background: white;
  padding: ${STYLE.spacingTweet} ${STYLE.spacingTweet} 5px ${STYLE.spacingTweet};
  text-align: left;
  border-bottom: ${BORDER};
`;
const FlexWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-left: ${STYLE.spacingTweet};
`;

const TweetContents = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  line-height: 1.3;
`;

export default Tweet;

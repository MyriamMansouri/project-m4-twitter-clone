import React from "react";
import styled from "styled-components";

import Header from "./Header";
import RetweetFrom from "../Tweet/RetweetFrom";
import ActionBar from "../Tweet/ActionBar";
import Media from "../Tweet/Media";
import Timestamp from "./Timestamp";
import { TweetWrapper, TweetContents } from "../Tweet/TweetWrappers";
import { TweetContext } from "../Tweet/TweetContext";
import MainTitle from "../misc/MainTitle";
import { ArrowLeft } from "../../assets/Icons";
import { STYLE, BORDER } from "../misc/constant";

const BigTweetDetails = () => {
  const { status, mediaUrl, retweetFrom } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <MainTitle>
        <IconWrapper>
          <ArrowLeft size={23} />
        </IconWrapper>
        Meow
      </MainTitle>
      <TweetWrapper tabIndex="0">
        {retweetFrom && <RetweetFrom retweetFrom={retweetFrom} />}
        <Header />
        <TweetContents>{status}</TweetContents>
        {mediaUrl && <Media mediaUrl={mediaUrl} />}
        <Timestamp />
        <ActionBar />
      </TweetWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  border-right: ${BORDER};
`;
const IconWrapper = styled.span`
  margin-right: ${STYLE.spacingTweet};
`;
export default BigTweetDetails;

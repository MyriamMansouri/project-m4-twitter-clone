import React from "react";

import Header from "./Header";
import ActionBar from "./ActionBar";
import TweetMedia from "./TweetMedia";
import Avatar from "./Avatar";
import RetweetFrom from "./RetweetFrom";

import { TweetContext } from "./TweetContext";

import { FlexWrapper, TweetWrapper, Wrapper, TweetContents } from "./TweetWrappers";

const Tweet = () => {
  const { status, mediaUrl, retweetFrom, avatarSrc } = React.useContext(
    TweetContext
  );

  return (
    <TweetWrapper>
      {retweetFrom && <RetweetFrom />}
      <FlexWrapper>
        <Avatar avatarSrc={avatarSrc} />
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

export default Tweet;

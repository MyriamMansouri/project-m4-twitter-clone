import React from "react";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import ActionBar from "./ActionBar";
import TweetMedia from "./TweetMedia";
import Avatar from "../misc/Avatar";
import RetweetFrom from "./RetweetFrom";

import { TweetContext } from "./TweetContext";

import {
  FlexWrapper,
  TweetWrapper,
  Wrapper,
  TweetContents,        
} from "./TweetWrappers";

const Tweet = () => {
  const { status, mediaUrl, retweetFrom, avatarSrc, tweetId } = React.useContext(
    TweetContext
  );

  let history = useHistory();

  const handleClick = (e) => {
    history.push(`/tweet/${tweetId}`);
  };

  return (

      <TweetWrapper onClick={handleClick} tabIndex="0" aria-label="View tweet">
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

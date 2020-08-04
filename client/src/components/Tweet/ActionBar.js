import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton/LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import Stat from "./Stat";

import { TweetContext } from "./TweetContext";

const ActionBar = () => {
  const {
    isRetweetedByCurrentUser,
    handleToggleRetweet,
    numRetweets,
    isLikedByCurrentUser,
    handleToggleLike,
    numLikes,
  } = React.useContext(TweetContext);
  
  return (
    <Wrapper>
      <Action
        color="rgb(27, 149, 224)"
        size={35}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TweetActionIcon kind="reply" />
      </Action>

      <Action
        color="rgb(23, 191, 99)"
        size={35}
        onClick={(e) => {
          handleToggleRetweet();
          e.stopPropagation();
        }}
      >
        <TweetActionIcon
          kind="retweet"
          color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
        />
        {numRetweets > 0 && <Stat>{numRetweets}</Stat>}
      </Action>
      <Action
        color="rgb(224, 36, 94)"
        size={35}
        onClick={(e) => {
          handleToggleLike();
          e.stopPropagation();
        }}
      >
        <LikeButton isLiked={isLikedByCurrentUser} />
        {numLikes > 0 && <Stat>{numLikes}</Stat>}
      </Action>
      <Action
        color="rgb(27, 149, 224)"
        size={35}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 35px;
`;

export default ActionBar;

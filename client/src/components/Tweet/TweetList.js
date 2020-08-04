import React from "react";

import { TweetProvider } from "./TweetContext";

import Tweet from "./Tweet";

const TweetList = ({tweetList}) => {
  const { tweetsById, tweetIds } = tweetList;
  return (
    <>
      {tweetIds.map((id) => (
        <TweetProvider key={id} tweet={tweetsById[id]}>
          <Tweet />
        </TweetProvider>
      ))}
    </>
  );
};

export default TweetList;

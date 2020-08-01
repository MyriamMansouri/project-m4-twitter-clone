import React from "react";

import { HomeFeedContext } from "./HomeFeedContext";
import { TweetProvider } from "../Tweet/TweetContext";

import Tweet from "../Tweet/Tweet";

const HomeFeedDetails = () => {
  const { homeFeed } = React.useContext(HomeFeedContext);
  const { tweetsById, tweetIds } = homeFeed;
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

export default HomeFeedDetails;

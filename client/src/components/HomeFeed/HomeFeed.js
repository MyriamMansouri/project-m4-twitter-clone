import React from "react";

import { HomeFeedContext } from "./HomeFeedContext";
import MainTitle from "../misc/MainTitle";
import NewTweet from "../Tweet/NewTweet";
import TweetDetails from "../Tweet/TweetDetails";

import styled from "styled-components";
import { BORDER } from "../misc/constant";

const SectionWrapper = styled.section`
  border-right: ${BORDER};
`;
const HomeFeed = () => {
  const { tweetList, status } = React.useContext(HomeFeedContext);
  return (
    <SectionWrapper>
      <MainTitle>Home</MainTitle>
      <NewTweet />
      {status === "loading" ? "loading" : <TweetDetails tweetList={tweetList} />}
    </SectionWrapper>
  );
};

export default HomeFeed;

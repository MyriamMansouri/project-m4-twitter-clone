import React from "react";

import { HomeFeedContext } from "./HomeFeedContext";
import MainTitle from "../misc/MainTitle";
import NewTweet from "../Tweet/NewTweet";
import TweetList from "../Tweet/TweetList";
import ErrorPage from '../ErrorPage'
import Spinner from '../../assets/Spinner'
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
      {
        {
          'loading':<Spinner />,
          'error': <ErrorPage />,
          'idle': <TweetList tweetList={tweetList} />
        }[status]
      }

  </SectionWrapper>)
};

export default HomeFeed;

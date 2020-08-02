import React from "react";
import HomeFeedDetails from "./HomeFeedDetails";
import NewTweet from '../Tweet/NewTweet'
import { HomeFeedContext } from "./HomeFeedContext";
import MainTitle from "../misc/MainTitle";

import styled from 'styled-components'
import { BORDER } from '../misc/constant'

const SectionWrapper = styled.section`
  border-right: ${BORDER};
`
const HomeFeed = () => {
  const { status } = React.useContext(HomeFeedContext);
  return (
    <SectionWrapper>
      <MainTitle>Home</MainTitle>
      <NewTweet />
      {status === "loading" ? "loading" : <HomeFeedDetails />}
    </SectionWrapper>
  );
};

export default HomeFeed;

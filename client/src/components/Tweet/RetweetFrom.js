import React from "react";
import { TweetContext } from "./TweetContext";
import TweetActionIcon from "./TweetActionIcon";

import styled from "styled-components";
import { STYLE } from "../misc/constant";

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  padding: 5px 0 10px 33px;
  font-size: 0.85rem;
  color: ${STYLE.neutral}
`;

const Text = styled.span`
  margin-left: ${STYLE.spacingTweet};
  vertical-align: middle;
`;
const RetweetFrom = () => {
  const { retweetFrom } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <TweetActionIcon kind="retweet" size={13}/>
      <Text>{retweetFrom} Remeowed</Text>
    </Wrapper>
  );
};

export default RetweetFrom;

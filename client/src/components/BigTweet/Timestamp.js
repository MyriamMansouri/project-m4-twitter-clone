import React from "react";
import styled from "styled-components";
import moment from "moment";

import { TweetContext } from "../Tweet/TweetContext";

import { STYLE } from "../misc/constant";

const Wrapper = styled.div`
  color: ${STYLE.neutral};
  font-size: 16px;
  margin-bottom: ${STYLE.marginBottom};
`;

const Timestamp = () => {
  const { timestamp } = React.useContext(TweetContext);
  return (
    <Wrapper>
      {moment(timestamp).format("h:mm a")} &middot;{" "}
      {moment(timestamp).format("MMM DD YYYY")} &middot; Critter web app
    </Wrapper>
  );
};

export default Timestamp;

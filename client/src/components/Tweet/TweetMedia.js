import React from "react";
import styled from "styled-components";

import { STYLE } from "../misc/constant";
import { TweetContext } from "./TweetContext";

const TweetMedia = () => {
  const { mediaUrl } = React.useContext(TweetContext);
  return (
    <MediaPlaceHolder
      style={{ backgroundImage:  `url(${ mediaUrl })` }}
    ></MediaPlaceHolder>
  );
};

const MediaPlaceHolder = styled.div`
  border-radius: ${STYLE.borderRadiusTweet};
  height: 370px;
  background: transparent no-repeat center;
  background-size: cover;
  margin-bottom:${STYLE.marginBottom};
`;
export default TweetMedia;

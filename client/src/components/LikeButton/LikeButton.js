import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";

import { TweetContext } from "../Tweet/TweetContext";
import ScaleIn from "./ScaleIn";

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6;
  const { isLikedByCurrentUser } = React.useContext(TweetContext);

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />}

      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;

import React from "react";
import styled from "styled-components";
import { TweetContext } from "./TweetContext";

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Avatar = () => {
  const { avatarSrc } = React.useContext(TweetContext);

  return <Image src={avatarSrc} />;
};

export default Avatar;

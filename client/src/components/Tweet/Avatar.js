import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Avatar = ({avatarSrc}) => {
  return <Image src={avatarSrc} />;
};

export default Avatar;

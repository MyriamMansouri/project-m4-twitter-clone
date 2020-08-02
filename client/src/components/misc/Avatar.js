import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50%;
`;

const Avatar = ({ avatarSrc, size = 48,  style }) => {
  return (
    <Image
      src={avatarSrc}
      style={{
        height: size,
        width: size,
        ...style
      }}
    />
  );
};

export default Avatar;

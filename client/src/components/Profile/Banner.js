import React from "react";
import styled from "styled-components";

const Banner = ({ bannerSrc }) => {
  return (
    <PlaceHolder style={{ backgroundImage: `url(${bannerSrc})` }}></PlaceHolder>
  );
};

const PlaceHolder = styled.div`
  height: 300px;
  background: transparent no-repeat center;
  background-size: cover;
`;
export default Banner;

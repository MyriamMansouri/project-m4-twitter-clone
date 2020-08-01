import React from "react";
import styled from "styled-components";

import { STYLE, BORDER } from "./constant";

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: ${STYLE.mainTitleFontSize};
  padding: ${STYLE.spacingTweet};
  border-bottom: ${BORDER};
`;
const MainTitle = ({ children }) => {
  return (
    <>
      <TitleWrapper>{children}</TitleWrapper>
    </>
  );
};

export default MainTitle;

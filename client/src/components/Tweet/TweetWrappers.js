import styled from "styled-components";
import { STYLE, BORDER } from "../misc/constant";

export const FlexWrapper = styled.div`
  display: flex;
`;

export const TweetWrapper = styled.div`
  background: white;
  padding: ${STYLE.spacingTweet};
  text-align: left;
  border-bottom: ${BORDER};
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-left: ${STYLE.spacingTweet};
`;

export const TweetContents = styled.div`
  margin-bottom: ${STYLE.marginBottom};
  font-size: 1rem;
  line-height: 1.3;
  word-break: break-all;
`;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Bomb } from "../assets/Icons";
import { STYLE } from "./misc/constant";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: ${STYLE.bigFontSize};
  margin:20px 0;
`;
const FakeLink = styled.span`
  color: blue;
  text-decoration: underline;
`;
const ErrorPage = () => {
  return (
    <Wrapper>
      <Bomb size={60} />
      <Title>An unknown error has occured</Title>
      <p>
        Please try refreshing the page, or <FakeLink><Link to="" alt="email support">contact support</Link></FakeLink>{" "}
        if the problem persists.
      </p>
    </Wrapper>
  );
};

export default ErrorPage;

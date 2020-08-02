import React from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import Button from "../misc/Button";
import {
  TweetWrapper,
  FlexWrapper,
  Wrapper,
  TweetContents,
} from "./TweetWrappers";

import { CurrentUserContext } from "../CurrentUserContext";

import { STYLE } from "../misc/constant";

const NewTweet = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  
  const MAX_CHAR = 280;

  const [remainingCharacters, setRemainingCharacters] = React.useState(
    MAX_CHAR
  );
  const [tweet, setTweet] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [disableBtn, setdisableBtn] = React.useState(true);

  const handleChange = (e) => {
    const text = e.target.value;
    text.length > 0 ? setdisableBtn(false) : setdisableBtn(true);
    setTweet(text);
    setRemainingCharacters(MAX_CHAR - text.length);
  };

  const handleSubmit = async (e) => {
    setdisableBtn(true);
    e.preventDefault();
    try {
      await fetch("/api/tweet", {
        method: "POST",
        body: JSON.stringify({ status: tweet }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setTweet("");
      setRemainingCharacters(MAX_CHAR);
      setIsError(false);
    } catch (err) {
      setdisableBtn(false);
      setIsError(true);
    }
  };

  return (
    <NewTweetWrapper>
      <Form onSubmit={handleSubmit}>
        <FlexWrapper>
          <Avatar avatarSrc={currentUser.avatarSrc} />
          <Wrapper>
            <TweetContents
              type="text"
              placeholder="What's happening ?"
              maxLength={MAX_CHAR}
              value={tweet}
              onChange={handleChange}
              autoFocus
              as="textarea"
            ></TweetContents>
          </Wrapper>
        </FlexWrapper>
        <BtnAreaWrapper>
          {isError && <Error>Error: try again</Error>}
          <CharWrapper>{remainingCharacters}</CharWrapper>
          <Button disabled={disableBtn ? true : false}>Meow</Button>
        </BtnAreaWrapper>
      </Form>
    </NewTweetWrapper>
  );
};

const Error = styled.span`
  color: ${STYLE.errorColor};
  float: right;
`;

const Form = styled.form`
  textarea {
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 60px;
    resize: none;
    font-family: inherit;
    padding: 0;
    &:focus {
      outline: none;
    }
  }
`;

const NewTweetWrapper = styled(TweetWrapper)`
  border-bottom: solid 6px ${STYLE.neutralLight};
`;

const BtnAreaWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
`

const CharWrapper=styled.span`
margin-right:${STYLE.spacingTweet}
`
export default NewTweet;

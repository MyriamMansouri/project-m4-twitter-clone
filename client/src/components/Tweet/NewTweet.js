import React from "react";
import styled from "styled-components";

import Avatar from "../misc/Avatar";
import Button from "../misc/Button";
import {
  TweetWrapper,
  FlexWrapper,
  Wrapper,
  TweetContents,
} from "./TweetWrappers";
import { CurrentUserContext } from "../CurrentUserContext";
import { HomeFeedContext } from "../HomeFeed/HomeFeedContext";

import { STYLE } from "../misc/constant";

const NewTweet = () => {
  const MAX_CHAR = 280;
  const { currentUser } = React.useContext(CurrentUserContext);
  const { setNewTweet } = React.useContext(HomeFeedContext);
  const [remainingCharacters, setRemainingCharacters] = React.useState(
    MAX_CHAR
  );
  const [tweet, setTweet] = React.useState("");
  const [error, setError] = React.useState(null);
  const [disableBtn, setdisableBtn] = React.useState(true);

  const textInput = React.createRef();

  const handleChange = (e) => {
    const text = e.target.value;
    text.length > 0 && text.length <= MAX_CHAR
      ? setdisableBtn(false)
      : setdisableBtn(true);
    setTweet(text);
    setRemainingCharacters(MAX_CHAR - text.length);
  };

  const toggleClass = () => {
    if (remainingCharacters < 0) {
      return "red";
    } else if (remainingCharacters < Math.floor(MAX_CHAR * 0.8)) {
      return "yellow";
    } else {
      return "normal";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setdisableBtn(true);
    // focus input again after send button is hit
    textInput.current.focus();

    fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({ status: tweet }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setNewTweet(tweet);
        setTweet("");
        setRemainingCharacters(MAX_CHAR);
        setError(null);
      })
      .catch((err) => {
        console.log(err)
        setdisableBtn(false);
        setError(err);
      });
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
              value={tweet}
              onChange={handleChange}
              autoFocus
              as="textarea"
              ref={textInput}
            ></TweetContents>
          </Wrapper>
        </FlexWrapper>
        <BtnAreaWrapper>
          {error && (
            <Error>
              <span role="img" aria-label="error emoji">❌</span> Error : please try again
            </Error>
          )}
          <CharWrapper className={toggleClass()}>
            {remainingCharacters}
          </CharWrapper>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CharWrapper = styled.span`
  margin: 0 ${STYLE.spacingTweet};
  font-size: 0.8rem;

  &.normal {
    color: ${STYLE.neutral};
  }
  &.yellow {
    color: orange;
    font-weight: 500;
  }
  &.red {
    color: red;
    font-weight: 500;
  }
`;
export default NewTweet;

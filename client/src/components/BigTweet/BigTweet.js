import React from "react";
import {BigTweetContext } from './BigTweetContext'
const BigTweet = () => {
  const { tweet } = React.useContext(BigTweetContext)
  console.log(tweet)
  return <>Big Tweet</>;
};

export default BigTweet;

import React from "react";
import { useParams } from "react-router";
import { TweetProvider } from "../Tweet/TweetContext";
import BigTweetDetails from "./BigTweetDetails";
import ErrorPage from "../ErrorPage";
import Spinner from "../../assets/Spinner";

const BigTweet = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.tweet);

        setTweet(data.tweet);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, [tweetId]);

  return (
    <>
      {status === "loading" && <Spinner/>}
      {status === "error" && <ErrorPage />}
      {status === "idle" && (
        <TweetProvider tweet={tweet}>
          <BigTweetDetails />
        </TweetProvider>
      )}
    </>
  );
};

export default BigTweet;

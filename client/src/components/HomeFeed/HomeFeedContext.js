import React from "react";

export const HomeFeedContext = React.createContext(null);


export const HomeFeedProvider = ({ children }) => {
  const [tweetList, setTweetList] = React.useState(null);
  const [newTweet, setNewTweet] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweetList(data);
        setStatus("idle");
      })
      .catch((err) => setStatus("error"));
  }, [newTweet]);

  return (
    <HomeFeedContext.Provider value={{ tweetList, status, setNewTweet }}>
      {children}
    </HomeFeedContext.Provider>
  );
};

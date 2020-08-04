import React from "react";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ tweet, children }) => {

  const [numLikes, setNumLikes] = React.useState(tweet.numLikes);
  const [numRetweets, setNumRetweets] = React.useState(tweet.numRetweets);
  const [isLiked, setIsLiked] = React.useState(tweet.isLiked);
  const [isRetweeted, setIsRetweeted] = React.useState(tweet.isRetweeted);

  const handleToggleLike = () => {
    if (!isLiked) {
      setNumLikes(numLikes + 1);
    } else {
      setNumLikes(numLikes - 1);
    }
    setIsLiked(!isLiked);
  };

  const handleToggleRetweet = () => {
    if (!isRetweeted) {
        setNumRetweets(numRetweets + 1);
    } else {
        setNumRetweets(numRetweets - 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  return (
    <TweetContext.Provider
      value={{
        status: tweet.status,
        tweetId : tweet.id,
        displayName: tweet.author.displayName,
        username: tweet.author.handle,
        avatarSrc: tweet.author.avatarSrc,
        retweetFrom : tweet.retweetFrom !== undefined ?  tweet.retweetFrom.handle : null,
        isRetweetedByCurrentUser: isRetweeted,
        handleToggleRetweet,
        isLikedByCurrentUser: isLiked,
        handleToggleLike,
        timestamp:tweet.timestamp,
        mediaUrl: tweet.media[0] !== undefined ? tweet.media[0].url: null ,
        numLikes,
        numRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

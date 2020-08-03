import React from "react";
import { useParams } from "react-router";

export const BigTweetContext = React.createContext(null);


export const BigTweetProvider = ({ children }) => {
  const { tweetId } = useParams()
  const [tweet, setTweet] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`/api/tweet/${tweetId}`);
        const data =  await res.json();
        setTweet(data);
        setStatus("idle");
        console.log(data)
      }
      fetchData()

    } catch(err) {
      console.log(err);
    }
  }, [tweetId]);

  return (
    <BigTweetContext.Provider value={{ tweet, status }}>
      {children}
    </BigTweetContext.Provider>
  );
};

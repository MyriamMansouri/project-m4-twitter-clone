import React from "react";

export const HomeFeedContext = React.createContext(null);


export const HomeFeedProvider = ({ children }) => {
  const [tweetList, setTweetList] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("/api/me/home-feed");
        const data =  await res.json();
        setTweetList(data);
        setStatus("idle");
      }
      fetchData()

    } catch(err) {
      console.log(err);
    }
  }, []);

  return (
    <HomeFeedContext.Provider value={{ tweetList, status }}>
      {children}
    </HomeFeedContext.Provider>
  );
};

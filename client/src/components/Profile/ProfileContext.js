import React from "react";
import { useParams } from "react-router";

export const ProfileContext = React.createContext(null);


export const ProfileProvider = ({ children }) => {
  const { profileId } = useParams()
  const [user, setUser] = React.useState(null);
  const [tweetList, setTweetList] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const feed = await fetch(`/api/${profileId}/feed`);
        const profile = await fetch(`/api/${profileId}/profile`);
        const feedData =  await feed.json();
        const profileData =  await profile.json();
        setTweetList(feedData);
        setUser(profileData.profile)
        setStatus("idle");
        console.log(profileData)
      }
      fetchData()

    } catch(err) {
      console.log(err);
    }
  }, [profileId]);

  return (
    <ProfileContext.Provider value={{ tweetList, user, status }}>
      {children}
    </ProfileContext.Provider>
  );
};

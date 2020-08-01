import React from "react";

export const CurrentUserContext = React.createContext(null);


export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("/api/me/profile");
        const data =  await res.json();
        setCurrentUser(data.profile);
        setStatus("idle");
      }
      fetchData()

    } catch(err) {
      console.log(err);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

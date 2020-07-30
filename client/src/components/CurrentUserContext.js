import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  return (
    <CurrentUserContext.Provider value={{id : "toto"}}>
      {children}
    </CurrentUserContext.Provider>
  );
};



import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import BigTweet from "./components/BigTweet/BigTweet";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/ErrorPage";

import { CurrentUserContext } from "./components/CurrentUserContext";
import { HomeFeedProvider } from "./components/HomeFeed/HomeFeedContext";
import { ProfileProvider } from "./components/Profile/ProfileContext";
import { BigTweetProvider } from "./components/BigTweet/BigTweetContext";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: 290px minmax(min-content, 580px);
  margin: 0 auto;
`;

const App = () => {
  const { status } = React.useContext(CurrentUserContext);
  return (
    <AppWrapper>
      <Router>
        <Sidebar />
        {status === "loading" && "loading"}
        {status === "error" && <ErrorPage />}
        {status === "idle" && (
          <Switch>
            <Route exact path="/">
              <HomeFeedProvider>
                <HomeFeed />
              </HomeFeedProvider>
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:">
              <BigTweetProvider>
                <BigTweet />
              </BigTweetProvider>
            </Route>
            <Route exact path="/:profileId">
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
            </Route>
          </Switch>
        )}
      </Router>
    </AppWrapper>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed/HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile/Profile";


import { CurrentUserContext } from "./CurrentUserContext";
import { HomeFeedProvider } from "../components/HomeFeed/HomeFeedContext";
import { ProfileProvider } from "../components/Profile/ProfileContext";

const Routes = () => {
  const { status } = React.useContext(CurrentUserContext);

  return status === "loading" ? (
    "loading"
  ) : (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomeFeedProvider>
            <HomeFeed />
          </HomeFeedProvider>
        </Route>

        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route path='/:profileId'>
          <ProfileProvider>
            <Profile />
          </ProfileProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

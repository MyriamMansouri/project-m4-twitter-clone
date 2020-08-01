import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import HomeFeed from "./HomeFeed/HomeFeed";

import { CurrentUserContext } from "./CurrentUserContext";
import { HomeFeedProvider } from "../components/HomeFeed/HomeFeedContext";

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
        <Route path={`/:profileId`}>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

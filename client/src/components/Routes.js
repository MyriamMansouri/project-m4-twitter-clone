import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";

const Routes = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          Home
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
        <Route path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

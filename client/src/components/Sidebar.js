import React from "react";
import { NavLink} from "react-router-dom";

import { CurrentUserContext, } from "./CurrentUserContext";
import Button from "./Button";
import Logo from "../assets/Logo";
import { Home, User, Bell, Bookmark } from "../assets/Icons";

import styled from "styled-components";
import { STYLE } from "./constant";


const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { handle } = currentUser
  return (
    <SidebarWrapper>
      <Logo />
      <ul>
        <li>
          <NavigationLink exact to="/">
            <Home />
            <LinkTitle>Home</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to={`/${handle}`}>
            <User />
            <LinkTitle>Profile</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/notifications">
            <Bell />
            <LinkTitle>Notifications</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/bookmarks">
            <Bookmark />
            <LinkTitle>Bookmarks</LinkTitle>
          </NavigationLink>
        </li>
      </ul>
    <Button fullLength >Meow</Button>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  margin: 20px 70px;
  font-weight: bold;
  & > * {
    margin: 20px 0;
  }
`;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  border-radius: ${STYLE.borderRadius};
  &:hover {
    color: ${STYLE.primary};
    background-color: ${STYLE.primaryLight};
  }
  &.active {
    color: ${STYLE.primary};
  }
`;

const LinkTitle = styled.span`
  margin-left: 15px;
  &:hover {
    opacity: 1;
  }
`;

export default Sidebar;

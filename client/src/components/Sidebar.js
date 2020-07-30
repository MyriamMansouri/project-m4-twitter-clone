import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo";
import { Home, User, Bell, Bookmark } from "../assets/Icons";

import styled from "styled-components";
import { COLORS } from "./constant";

import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { id } = React.useContext(CurrentUserContext);
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
          <NavigationLink to={`/${id}`}>
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

      <button>Meow</button>
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
  border-radius: 30px;
  &:hover {
    color: ${COLORS.primary};
    background-color: ${COLORS.primrayLight};
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const LinkTitle = styled.span`
  margin-left: 15px;
  &:hover {
    opacity: 1;
  }
`;

export default Sidebar;

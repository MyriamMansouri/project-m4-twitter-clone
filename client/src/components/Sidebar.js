import React from "react";
import { NavLink } from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
import Button from "./misc/Button";
import Logo from "../assets/Logo";
import { Home, User, Bell, Bookmark } from "../assets/Icons";

import styled from "styled-components";
import { STYLE, BORDER } from "./misc/constant";

const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <SidebarWrapper>
 
      <ul>
        <li><Logo /></li>
        <li>
          <NavigationLink exact to="/">
            <Home />
            <LinkTitle>Home</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink exact to={`/${currentUser ? currentUser.handle : ''}`}>
            <User />
            <LinkTitle>Profile</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink exact to="/notifications">
            <Bell />
            <LinkTitle>Notifications</LinkTitle>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink exact to="/bookmarks">
            <Bookmark />
            <LinkTitle>Bookmarks</LinkTitle>
          </NavigationLink>
        </li>
      </ul>
      <Button fullWidth>Meow</Button>
    </SidebarWrapper>
  );
};


const SidebarWrapper = styled.aside`
  padding-right: 70px;
  min-height:100vh;
  font-weight: bold;
  border-right: ${BORDER};
  & > * {
    margin: 20px 0;
  }
  
  @media only screen and (max-width:78px) {
    ul {
      display:flex;
      flex-flow: column nowrap;
      align-items:center
    }
    padding: 0 20px;
  }
`;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  border-radius: ${STYLE.borderRadius};
  &:hover {
    color: ${STYLE.primary};
    background-color: ${STYLE.primaryLighter};
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

  @media only screen and (max-width:738px) {
    display:none;

  }
`;

export default Sidebar;

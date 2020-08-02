import React from "react";
import moment from "moment";

import Banner from "./Banner";
import Handle from "../misc/Handle";
import Avatar from "../misc/Avatar";
import { Calendar, MapPin } from "../../assets/Icons";

import { ProfileContext } from "./ProfileContext";
import { CurrentUserContext } from "../CurrentUserContext";

import styled from "styled-components";
import { STYLE, BORDER } from "../misc/constant";
import Button from "../misc/Button";

const UserInformation = () => {
  const { user } = React.useContext(ProfileContext);
  const { currentUser } = React.useContext(CurrentUserContext);

  const {
    displayName,
    handle,
    bannerSrc,
    avatarSrc,
    bio,
    isFollowingYou,
    isBeingFollowedByYou,
    location,
    joined,
    numFollowers,
    numFollowing,
  } = user;

  return (
    <>
      <Banner bannerSrc={bannerSrc} />
      <UserWrapper>
        <HeaderWrapper>
          <Avatar
            size={150}
            avatarSrc={avatarSrc}
            style={{ marginTop: "-75px", border: "solid 3px white" }}
          />
          {handle !== currentUser.handle && (
            <Button>{isBeingFollowedByYou ? "Unfollow" : "Follow"}</Button>
          )}
        </HeaderWrapper>

        <UserName>{displayName}</UserName>
        <p>
          <Handle username={handle} />
          {isFollowingYou === true && <FollowerTag>Follows you</FollowerTag>}
        </p>
        <UserBio>{bio}</UserBio>

        <DetailWrapper>
          <Box>
            <MapPin size={17} /> {location}
          </Box>
          <Box>
            <Calendar size={17} /> Joined {moment(joined).format("MMMM YYYY")}
          </Box>
        </DetailWrapper>
        <DetailWrapper>
          <Box>
            <Bold>{numFollowing}</Bold> Following
          </Box>
          <Box>
            <Bold>{numFollowers}</Bold> Followers
          </Box>
        </DetailWrapper>
      </UserWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserWrapper = styled.div`
  padding: ${STYLE.spacingTweet};
  border-bottom: ${BORDER};
`;

const UserName = styled.h2`
  font-size: ${STYLE.bigFontSize};
  font-weight: bold;
  margin: 6px 0;
`;
const FollowerTag = styled.span`
  margin-left: 5px;
  background-color: ${STYLE.neutralLight};
  font-size: ${STYLE.smallFontSize};
  padding: 1px 7px;
  border-radius: 6px;
`;
const UserBio = styled.p`
  font-weight: 600;
  margin: 17px 0;
`;
const DetailWrapper = styled.div`
  margin-bottom: 17px;
  font-size: ${STYLE.smallFontSize};
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Box = styled.span`
  margin-right: ${STYLE.spacingTweet};
`;

export default UserInformation;

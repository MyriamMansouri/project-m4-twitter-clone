import React from "react";

import UserInformation from "./UserInformation";
import { ProfileContext } from "./ProfileContext";
import MainTitle from "../misc/MainTitle";
import TweetList from "../Tweet/TweetList";

import styled from "styled-components";
import { BORDER } from "../misc/constant";
import Spinner from "../../assets/Spinner";

const SectionWrapper = styled.section`
  border-right: ${BORDER};
`;
const Profile = () => {
  const { tweetList, status } = React.useContext(ProfileContext);
  return (
    <SectionWrapper>
      <MainTitle>Profile</MainTitle>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <div>
          <UserInformation />
          <TweetList tweetList={tweetList} />
        </div>
      )}
    </SectionWrapper>
  );
};

export default Profile;

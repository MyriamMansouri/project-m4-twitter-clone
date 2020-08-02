import React from "react";

import { ProfileContext } from "./ProfileContext";
import MainTitle from "../misc/MainTitle";
import TweetDetails from "../Tweet/TweetDetails";

import styled from "styled-components";
import { BORDER } from "../misc/constant";
import UserInformation from "./UserInformation";

const SectionWrapper = styled.section`
  border-right: ${BORDER};
`;
const Profile = () => {
  const { tweetList, status } = React.useContext(ProfileContext);
  return (
    <SectionWrapper>
      <MainTitle>Profile</MainTitle>
      {status === "loading" ? (
        "loading"
      ) : (
        <div>
          <UserInformation />
          <TweetDetails tweetList={tweetList} />
        </div>
      )}
    </SectionWrapper>
  );
};

export default Profile;

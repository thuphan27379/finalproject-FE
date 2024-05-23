import React, { useEffect } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import useAuth from "C:/Users/Public/finalproject-frontend/src/hooks/useAuth.js";

import Profile from "../features/user/Profile";
import { getUser } from "../features/user/userSlice";
import LoadingScreen from "../components/LoadingScreen";
import ProfileAbout from "C:/Users/Public/finalproject-frontend/src/features/user/ProfileAbout.js";
import ProfileScoreCard from "C:/Users/Public/finalproject-frontend/src/features/user/ProfileScorecard.js";
import ProfileSocialInfo from "C:/Users/Public/finalproject-frontend/src/features/user/ProfileSocialInfo.js";

// CODERCOMM
function UserProfilePage({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth

  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  ///////fix bug about get list of posts of currentUser only
  //     shallowEqual:  // make sure re-render all the change of selectedUser
  const { selectedUser, isLoading } = useSelector(
    (state) => state.user,
    shallowEqual
  );

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  //UI
  return (
    <Container sx={{ paddingTop: "95px" }}>
      <Grid item xs={12} md={8}>
        {/* show profile info */}
        <Stack spacing={1}>
          {/* <ProfileAbout profile={profile} />
          <ProfileScoreCard profile={profile} />
          <ProfileSocialInfo profile={profile} /> */}
        </Stack>
      </Grid>
      {/* show postForm, postList */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>{selectedUser && <Profile profile={selectedUser} />}</>
      )}
    </Container>
  );
}

export default UserProfilePage;

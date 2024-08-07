import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Container, Grid, Stack } from "@mui/material";

import useAuth from "../hooks/useAuth";
import Profile from "../features/user/Profile";
import { getUser } from "../features/user/userSlice";
import LoadingScreen from "../components/LoadingScreen";
import ProfileScorecard from "../features/user/ProfileScorecard";
import ProfileSocialInfo from "../features/user/ProfileSocialInfo";
import ProfileAbout from "../features/user/ProfileAbout";

//
function UserProfilePage() {
  const { user } = useAuth(); //get data of user from useAuth

  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  // fix bug about get list of posts of currentUser only
  const { selectedUser, isLoading } = useSelector(
    (state) => state.user,
    shallowEqual // update data theo khi userId thay doi
    // make sure re-render all the change of selectedUser
  );

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  // UI
  return (
    <>
      <Container spacing={1} sx={{ paddingTop: "96px", maxWidth: "850px" }}>
        <Grid item xs={12} md={8}>
          {/* show profile info */}
          <Stack spacing={1}>
            {/* <Profile profile={selectedUser} /> */}
            {/* <ProfileAbout profile={selectedUser} />
            <ProfileScorecard profile={selectedUser} />
            <ProfileSocialInfo profile={selectedUser} /> */}
          </Stack>
        </Grid>

        {/* show postList */}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>{selectedUser && <Profile profile={selectedUser} />}</>
        )}
      </Container>
    </>
  );
}

export default UserProfilePage;

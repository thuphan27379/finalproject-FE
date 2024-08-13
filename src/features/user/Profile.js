import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";
import ProfileScorecard from "./ProfileScorecard";
import ProfileSocialInfo from "./ProfileSocialInfo";
import ProfileAbout from "./ProfileAbout";

// show own info & enterprise
// function show info of user account
function Profile({ profile }) {
  const { user } = useAuth(); // get data of user from useAuth

  // render
  return (
    <>
      <Grid
        container
        spacing={2}
        width={"100%"}
        sx={{
          width: "750px",
          paddingTop: 0,
          marginLeft: "-20px",
        }}
      >
        <Grid
          item
          // xs={8}
          // md={12}
          sx={{
            paddingTop: 0,
            paddingBottom: "20px",
            paddingRight: "10px",
            marginLeft: "-2px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              paddingLeft: "40px",
              color: "#0A3161",
            }}
          >
            My Business
          </Typography>

          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginLeft: "-15px",
              paddingLeft: 0,
              paddingTop: 0,
              marginTop: "-3px",
            }}
          >
            {/* 20% */}
            <ProfileScorecard profile={profile} />
            {/* 40% */}
            <ProfileAbout profile={profile} />
            {/* 40% */}
            <ProfileSocialInfo profile={profile} />
          </Stack>
        </Grid>

        {/* center content 8/12 */}
        {/* SET GRID - MAIN BODY OUTLET */}
        <Grid
          container
          sx={{
            width: "750px",
            marginRight: "0",
          }}
        >
          <Stack spacing={2} width={"100%"}>
            {user?._id === profile?._id && <PostForm />}
            <PostList userId={profile?._id} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;

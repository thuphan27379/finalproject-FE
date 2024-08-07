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
        spacing={3}
        width={"100%"}
        sx={{
          paddingRight: "5px",
          paddingTop: 0, // work
          maxWidth: "850px",
          marginLeft: "10px",
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        {/* left sidebar 4/12 */}
        <Grid
          item
          xs={8}
          md={12}
          sx={{
            paddingTop: 0, //?
            paddingBottom: "20px", // work
            paddingLeft: "unset", //?
            marginLeft: "-10px", // work
            paddingRight: "10px", //?
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 3, paddingLeft: "40px", color: "#0A3161" }}
          >
            My Business
          </Typography>

          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: "25px",
              marginRight: "20px",
              "& .css-13mhfsw-MuiGrid-root, .css-1q7661i-MuiGrid-root": {
                paddingLeft: 0,
                paddingTop: 0,
              },
              "& .css-13mhfsw-MuiGrid-root > .MuiGrid-item": {
                paddingLeft: 0,
                paddingTop: 0,
              },
              "& .css-15yln57-MuiStack-root > :not(style) ~ :not(style)": {},
            }}
          >
            {/* 20% */}
            <ProfileScorecard
              profile={profile}
              width={"200px"}
              sx={{
                minWidth: "200px", //
              }}
            />
            {/* 40% */}
            <ProfileAbout profile={profile} maxWidth={"200px"} />
            {/* 40% */}
            <ProfileSocialInfo profile={profile} minWidth={"230px"} />
          </Stack>
        </Grid>

        {/* center content 8/12 */}
        {/* SET GRID - MAIN BODY OUTLET */}
        <Grid
          container
          sx={{
            marginLeft: "15px", // work
            marginRight: "0",
          }}
        >
          <Stack spacing={3} width={"100%"}>
            {user?._id === profile?._id && <PostForm />}
            <PostList userId={profile?._id} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;

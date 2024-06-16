import React from "react";
import { Grid, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";

import ProfileScorecard from "../user/ProfileScorecard";
import ProfileSocialInfo from "../user/ProfileSocialInfo";
import ProfileAbout from "../user/ProfileAbout";

// show own info & enterprise
// function show info of user account: user profile page
function Profile({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth

  //render
  return (
    <>
      <Grid
        container
        spacing={3}
        width={"100%"}
        sx={{
          paddingTop: "0px", // work
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        {/* left sidebar 4/12 */}
        <Grid
          item
          xs={8}
          md={12}
          sx={{
            paddingTop: "0px", //?
            paddingBottom: "20px", //work
            paddingLeft: "unset", //?
            // padding: "0",
            marginLeft: "-24px", //work
            marginRight: "0px", //?
            paddingRight: "0px", //?
          }}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              "& .css-13mhfsw-MuiGrid-root, .css-1q7661i-MuiGrid-root": {
                maxWidth: "100%",
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-13mhfsw-MuiGrid-root > .MuiGrid-item": {
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-15yln57-MuiStack-root > :not(style) ~ :not(style)": {
                maxWidth: "30%",
              },
              paddingLeft: "0px",
              paddingTop: "0px",
            }}
          >
            {/* <Grid item md={3} direction="row" sx={{ direction: "row" }}> */}
            {/* 20% */}
            <ProfileScorecard
              profile={profile}
              width={"200px"}
              sx={{
                // "& .css-15yln57-MuiStack-root > :not(style) ~ :not(style)": {
                //   maxWidth: "20%",
                // },
                minWidth: "200px", //
              }}
            />
            {/* 40% */}
            <ProfileAbout profile={profile} minWidth={"250px"} />
            {/* 40% */}
            <ProfileSocialInfo
              profile={profile}
              minWidth={"250px"}
              sx={{ maxWidth: "250px" }}
            />
            {/* </Grid> */}
          </Stack>
        </Grid>

        {/* center content 8/12 */}
        {/* SET GRID - MAIN BODY OUTLET */}
        <Grid container>
          <Stack spacing={3} width={"100%"}>
            {user._id === profile?._id && <PostForm />}
            <PostList userId={profile?._id} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;

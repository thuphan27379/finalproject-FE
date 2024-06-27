import React from "react";
import { Grid, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";
import ProfileScorecard from "./ProfileScorecard";
import ProfileSocialInfo from "./ProfileSocialInfo";
import ProfileAbout from "./ProfileAbout";

// show own info & enterprise
// function show info of user account
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
            marginLeft: "-10px", //work
            paddingRight: "10px", //?
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
              paddingRight: "25px",
              marginRight: "20px",
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
            <ProfileSocialInfo
              profile={profile}
              minWidth={"230px"}
              sx={{ maxWidth: "230px" }}
            />
            {/* </Grid> */}
          </Stack>
        </Grid>

        {/* center content 8/12 */}
        {/* SET GRID - MAIN BODY OUTLET */}
        <Grid
          container
          sx={{
            marginLeft: "15px", //work
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

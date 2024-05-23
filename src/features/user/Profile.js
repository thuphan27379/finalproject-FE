import { Grid, Stack } from "@mui/material";
import React from "react";

import useAuth from "../../hooks/useAuth";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";

// show own info & enterprise
// function show info of user account: profile page
function Profile({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth
<<<<<<< HEAD
  console.log(profile);

  //render
  return (
    <Grid spacing={1} width={"100%"} xs={8} paddingTop={0} marginTop={0}>
      {/* da xoa card profile info, can bo vo userProfilePage */}
      <Grid>
        <Stack spacing={1} xs={8}>
          {user?._id === profile?._id && <PostForm />}
=======

  //render
  return (
    <Grid container spacing={3} width={"100%"}>
      {/* left sidebar 4/12 */}
      {/* <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileScorecard profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileSocialInfo profile={profile} />
        </Stack>
      </Grid> */}

      {/* center content 8/12 */}
      {/* SET GRID - MAIN BODY OUTLET */}
      <Grid container>
        <Stack spacing={3} width={"100%"}>
          {user._id === profile._id && <PostForm />}
>>>>>>> 5580e5d7533b101092ad6f56a8a828c2ebe0053c
          {/* hien thi postForm cua current user ma thoi 
          neu k, thi day la profile page ma moi nguoi co the xem dc */}
          <PostList userId={profile?._id} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Profile;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Stack, Typography, Box } from "@mui/material";

import useAuth from "../hooks/useAuth";
import GroupSearch from "../features/group/GroupSearch";
import GroupList from "../features/group/GroupList";
import GroupInterest from "../features/group/GroupInterest";
import GroupForm from "../features/group/GroupForm"; // /blog
import PostList from "../features/post/PostList"; // post of currentUser

// UI for the group //GroupPage  - group dang la con cua /blog ---
// GroupSearch: SEARCH FOR GROUP
// GroupList: list of the group, pagination
// InterestList: interest list create by users, pagination
// GroupForm: create a new group
// GroupPostForm: if user login => PostForm
// GroupPostList: list of posts from each group // GroupPostList
// copy of Group.js
function GroupPage({ profile, groupId }) {
  const { user } = useAuth(); // get data of user from useAuth
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const currentGroupId = params.groupId;
  // console.log(currentGroupId);
  const currentUserId = user._id;
  // console.log(currentUserId);

  //
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          width: "750px",
          marginLeft: "-20px",
          paddingTop: "-20px",
          paddingBottom: "100px",
          marginBottom: "100px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#0A3161",
            mb: 1,
            paddingTop: "20px",
            paddingLeft: "50px",
          }}
        >
          Our Groups
        </Typography>

        <Grid
          item
          // xs={8}
          // md={12}
          sx={{
            width: "750px",
            marginLeft: "-24px",
            paddingTop: 0,
            marginTop: "-7px",
            paddingBottom: "20px",
          }}
        >
          {/* 2 cards */}
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              paddingLeft: 0,
              paddingTop: 0,
            }}
          >
            {/* sx={{ width: "65%" }} */}
            <GroupList profile={profile} />
            {/* sx={{ width: "35%" }} */}
            <GroupInterest profile={profile} />
          </Stack>
        </Grid>

        {/* search */}
        <Stack
          sx={{
            width: "750px",
            marginLeft: "-20px",
          }}
        >
          <GroupSearch profile={profile} />
        </Stack>

        {/* GroupForm, create a new group */}
        <Stack
          sx={{
            width: "750px",
            marginLeft: "-20px",
          }}
        >
          <GroupForm />
        </Stack>

        {/* postList */}
        {/* <Grid container sx={{ paddingLeft: "15px", paddingTop: "20px" }}>
          <Stack spacing={1} width={"100%"}>
            <PostList userId={profile?._id} />
          </Stack>
        </Grid> */}

        {/* ? */}
        <Box sx={{ flexGrow: 1 }} />
      </Grid>
      <Box sx={{ flexGrow: 1 }} />
    </>
  );
}

export default GroupPage;

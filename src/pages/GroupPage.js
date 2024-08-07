import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid, Stack, Typography, Box } from "@mui/material";

import useAuth from "../hooks/useAuth";
import GroupSearch from "../features/group/GroupSearch";
import GroupList from "../features/group/GroupList";
import GroupInterest from "../features/group/GroupInterest";
import GroupForm from "../features/group/GroupForm"; // /blog
import GroupPostForm from "../features/group/GroupPostForm"; // /group/:groupId
import PostList from "../features/post/PostList"; // post of currentUser
// import GroupPostList from "../group/GroupPostList";
import { leaveGroup, getSingleGroup } from "../features/group/groupSlice";

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

  // getSingleGroup
  // show group: name, interest,... after join
  // const { singleGroup } = useSelector((state) => state.group, shallowEqual); // get state data from groupController (be)
  // console.log("Single group", singleGroup);

  // useEffect(() => {
  //   if (currentGroupId) {
  //     dispatch(getSingleGroup(currentGroupId)); // from groupSlice (fe)
  //   }
  // }, [dispatch, currentGroupId]);

  // leave a group
  // const handleLeave = async (currentGroupId, currentUserId) => {
  //   try {
  //     dispatch(leaveGroup({ currentGroupId, currentUserId })); //
  //     toast.success("Leave a group successfully");
  //     navigate(`/blog`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //
  return (
    <>
      <Grid
        container
        spacing={3}
        // width={"100%"}
        sx={{
          maxWidth: "850px",
          paddingBottom: "100px",
          paddingTop: "-20px", // work
          marginLeft: "7px",
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            paddingLeft: "53px",
            paddingTop: "25px",
            color: "#0A3161",
          }}
        >
          Our Groups
        </Typography>

        <Grid
          item
          xs={8}
          md={12}
          sx={{
            maxWidth: "850px", // ??
            paddingTop: 0, // ?
            paddingBottom: "20px", //work
            paddingLeft: "unset", // ?
            marginLeft: "-10px", //work
            paddingRight: "13px", // ?
            "& .css-y2fcx1-MuiGrid-root> .MuiGrid-item": {
              paddingTop: 0, // ?
            },
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
              "& .css-13mhfsw-MuiGrid-root, .css-1q7661i-MuiGrid-root": {
                paddingLeft: 0,
                paddingTop: 0,
              },
              "& .css-13mhfsw-MuiGrid-root > .MuiGrid-item": {
                paddingLeft: 0,
                paddingTop: 0,
              },
              "& .css-y2fcx1-MuiGrid-root> .MuiGrid-item": {
                paddingTop: 0, // ?
              },
            }}
          >
            {/*sx={{ width: "65%" }} */}
            <GroupList profile={profile} />
            {/* sx={{ width: "35%" }} */}
            <GroupInterest profile={profile} />
          </Stack>
        </Grid>

        {/* search*/}
        <GroupSearch profile={profile} />

        {/* GroupForm, create a new group */}
        <GroupForm width="100%" />

        {/* postList */}
        {/* <Grid container sx={{ paddingLeft: "15px", paddingTop: "20px" }}>
          <Stack spacing={1} width={"100%"}>
            <PostList userId={profile?._id} />
          </Stack>
        </Grid> */}

        {/* ? */}
        <Box sx={{ flexGrow: 2 }} />
      </Grid>
      <Box sx={{ flexGrow: 2 }} />
    </>
  );
}

export default GroupPage;

import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import GroupSearch from "./GroupSearch";
import GroupList from "./GroupList";
// import GroupInterest from "./GroupInterest";
// import GroupForm from "./GroupForm"; // /blog
import GroupPostForm from "../group/GroupPostForm"; // /group/:groupId
import GroupPostList from "../group/GroupPostList"; //
import { getList, leaveGroup, getSingleGroup } from "./groupSlice";

// UI for the group => /group/:groupId ---
// GroupSearch: SEARCH FOR GROUP
// GroupList: list of the group, pagination
// InterestList: interest list create by users, pagination
// GroupForm: create a new group
// GroupPostForm: create a post of the group if user login
// GroupPostList: list of posts from each group  // post of all group
function Group({ profile, groupId }) {
  const { user } = useAuth(); // get data of user from useAuth
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const currentGroupId = params.groupId;
  // console.log(currentGroupId);
  const currentUserId = user._id;
  // console.log(currentUserId);

  // getSingleGroup // show group name, interest,... after join
  const { singleGroup } = useSelector((state) => state.group, shallowEqual); // get state data from groupController (be)
  // console.log("Single group", singleGroup);

  useEffect(() => {
    if (currentGroupId) {
      dispatch(getSingleGroup(currentGroupId)); // from groupSlice (fe)
    }
  }, [dispatch, currentGroupId]);

  // leave a group
  const handleLeave = async (groupId, userId) => {
    try {
      await dispatch(
        leaveGroup({ currentGroupId: groupId, currentUserId: userId })
      );
      toast.success("Left group successfully");
      navigate(`/blog`);
    } catch (error) {
      console.error(error);
    }
  };

  // check member for show Leave btn
  const isUserMember = () => {
    return (
      singleGroup &&
      singleGroup.members.some((member) => member._id === currentUserId)
    );
  };

  //
  return (
    <>
      <Stack
        // stack css moi them vo
        direction="column"
        sx={{
          paddingTop: "90px",
          "& .css-1p6s51d-MuiGrid-root": {
            marginLeft: "unset",
            paddingRight: "50px",
          },
        }}
      >
        <Grid
          container
          spacing={3}
          width={"100%"}
          sx={{
            paddingTop: 0,
          }}
        >
          <Grid
            item
            xs={8}
            md={12} // responsive ok
            sx={{
              paddingTop: 0, //?
              paddingBottom: "20px", //work
              paddingLeft: "unset", //?
              marginLeft: "-10px", //work
              paddingRight: "13px", //?
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3, paddingLeft: "40px", color: "#0A3161" }}
            >
              My Groups
            </Typography>

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
              }}
            >
              {/* 20% search*/}
              <GroupSearch profile={profile} />
              {/* 40% with pagination*/}
              <GroupList profile={profile} />
              {/* 40% with pagination*/}
              {/* <GroupInterest profile={profile}  /> */}
            </Stack>
          </Grid>

          {/* group name & interest show if clicked/joined */}
          {/* leave button */}
          {singleGroup && (
            <Stack
              direction="row"
              justifyContent={"space-between"}
              sx={{ paddingBottom: "20px", paddingLeft: "20px" }}
            >
              <Box>
                <Typography
                // sx={{ color: "#fff" }}
                >
                  Group name: {singleGroup.name} - Interest:{" "}
                  {singleGroup.interests}
                  {"."}{" "}
                </Typography>
              </Box>{" "}
              <Box>
                <Typography
                // sx={{ color: "#fff" }}
                >
                  {" "}
                  * Members Count: 100 - Posts Count: 1000{" "}
                </Typography>
              </Box>
              {/* leave btn */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end", // ?
                  marginLeft: "50px",
                }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{
                    p: 0.5,
                    fontSize: 10,
                  }}
                  onClick={() => handleLeave(currentGroupId, currentUserId)}
                >
                  Leave
                </Button>
              </Box>
              {/*  */}
              {isUserMember() && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginLeft: "50px",
                  }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      p: 0.5,
                      fontSize: 10,
                    }}
                    onClick={() => handleLeave(currentGroupId, currentUserId)}
                  >
                    Leave
                  </Button>
                </Box>
              )}
            </Stack>
          )}

          {/* postForm, postList */}
          <Grid container sx={{ paddingLeft: "15px" }}>
            <Stack spacing={1} width={"100%"}>
              <GroupPostForm userId={profile?._id} />
              <GroupPostList userId={profile?._id} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Group;

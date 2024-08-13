import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import GroupSearch from "./GroupSearch";
import GroupList from "./GroupList";
import GroupInterest from "./GroupInterest";
import GroupPostForm from "../group/GroupPostForm"; // /group/:groupId
import GroupPostList from "../group/GroupPostList"; //
import { leaveGroup, getSingleGroup } from "./groupSlice";

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

  //
  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: "750px",
          paddingTop: "90px",
          marginLeft: "4px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item>
            <Typography
              variant="h5"
              sx={{ mb: 3, color: "#0A3161", paddingLeft: "40px" }}
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
                width: "750px",
                paddingLeft: 0,
                paddingTop: 0,
                marginLeft: "0",
              }}
            >
              {/* search */}
              {/* <GroupSearch profile={profile} sx={{ width: "40%" }} /> */}
              {/* list */}
              <GroupList profile={profile} />
              <GroupInterest />
            </Stack>
          </Grid>

          {/* group name & interest show if clicked/joined */}
          {/* leave button */}
          {singleGroup && (
            <Stack
              direction="row"
              justifyContent={"space-between"}
              sx={{
                width: "750px",
                paddingBottom: "20px",
                marginLeft: "25px",
                marginTop: "20px",
              }}
            >
              <Box>
                <Typography>
                  Group name: {singleGroup.name} - Interest:{" "}
                  {singleGroup.interests}
                  {"."}{" "}
                </Typography>
              </Box>{" "}
              <Box>
                <Typography>
                  {" "}
                  * Members Count: 100 - Posts Count: 1000{" "}
                </Typography>
              </Box>
              {/* leave btn */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: "30px",
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
                  disabled={!singleGroup.members.includes(currentUserId)} //
                >
                  Leave
                </Button>
              </Box>
              {/*  */}
              {/* {isUserMember() && (
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
                    onClick={handleLeave} //() => handleLeave(currentGroupId, currentUserId)
                  >
                    Leave
                  </Button>
                </Box>
              )} */}
            </Stack>
          )}

          {/* postForm, postList */}
          <Grid
            container
            sx={{
              width: "750px",
              marginLeft: "24px",
            }}
          >
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

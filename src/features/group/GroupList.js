import {
  Card,
  Typography,
  CardHeader,
  Stack,
  Box,
  Button,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import { getList, joinGroup } from "./groupSlice";
// import { GROUP_PER_PAGE } from "../../app/config";

// 2nd card: list of group name, link to that group and with all post
function GroupList({ groupId }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const currentUserId = user._id;
  const currentGroupId = params.groupId;
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(user);
  const [page, setPage] = useState(1);
  const { list, totalGroups } = useSelector((state) => state.group);
  console.log(list);

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  // handleJoin ??? goi groupid ve api
  const handleJoin = async (currentGroupId, currentUserId) => {
    try {
      dispatch(joinGroup({ currentGroupId, currentUserId }));
      toast.success("Join a group successfully");
      navigate(`/group/${groupId}`); //?
    } catch (error) {
      console.log("User already join");
    }
  };

  // navigate to groupPage /group/:groupId
  const handleNavigate = (groupId) => {
    navigate(`/group/${groupId}`); //?
  };

  //
  return (
    <>
      <Card sx={{ minWidth: "490px", minHeight: "270px" }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardHeader
            title="List of Group"
            variant="h6"
            sx={{ paddingTop: "10px" }}
          />

          {/* pagination */}
          <Pagination
            flexDirection="flex-end"
            count={totalGroups}
            siblingCount={0} //...
            page={page}
            onChange={(e, page) => {
              setPage(page);
              dispatch(getList({ groupId, page }));
            }}
            sx={{ paddingTop: "10px" }}
          />
        </Stack>

        {/* click on to show group name, group post */}
        <Stack spacing={2} sx={{ p: 2 }}>
          {list.map((listItem) => (
            <Box
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
              onClick={() => {
                handleNavigate(listItem._id);
              }}
            >
              <Typography key={listItem._id}>
                * {listItem.name} ({listItem.interests}) -{" "}
                {listItem.members.length} members
              </Typography>

              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  p: 0,
                  fontSize: 10,
                  "& .css-13f20w7-MuiButtonBase-root-MuiButton-root:hover": {
                    backgroundColor: "#ced5df",
                  },
                }}
                onClick={() => handleJoin(listItem._id)}
              >
                Join
              </Button>
            </Box>
          ))}
        </Stack>
      </Card>
    </>
  );
}

export default GroupList;

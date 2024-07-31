import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  Typography,
  CardHeader,
  Stack,
  Box,
  Button,
  Pagination,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { getList, joinGroup } from "./groupSlice";
// import { GROUP_PER_PAGE } from "../../app/config";

// 2nd card: list of group name, link to that group and with all post
function GroupList({ groupId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const params = useParams();
  const currentUserId = user._id;
  const currentGroupId = params.groupId;
  // console.log(currentUserId);
  // console.log(currentGroupId);

  // const currentUser = useSelector((state) => state.user.currentUser);

  const [page, setPage] = useState(1);
  const { list, totalGroups } = useSelector((state) => state.group);
  // console.log(list);

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  // handleJoin ?? goi groupid ve api
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
      <Card
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
        sx={{ minWidth: "500px", minHeight: "250px" }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardHeader
            title="List of Groups"
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
            sx={{
              paddingTop: "10px",
              "& .css-1888ozn-MuiButtonBase-root-MuiPaginationItem-root": {
                margin: "0px",
              },
              color: "#fff", //?
            }}
          />
        </Stack>

        {/* click on to show group name, group post */}
        <Stack spacing={1} sx={{ p: 2 }}>
          {list.map((listItem) => (
            <Box
              key={listItem._id}
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
              // onClick={() => {
              //   handleNavigate(listItem._id);
              // }}
            >
              <Typography
                key={listItem._id}
                onClick={() => {
                  handleNavigate(listItem._id);
                }}
              >
                * {listItem.name} ({listItem.interests}) -{" "}
                {listItem.members.length} members
              </Typography>

              {/* if already join, hide OR show Your Group OR leave */}
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  p: 0,
                  fontSize: 10,
                  "& .css-13f20w7-MuiButtonBase-root-MuiButton-root:hover": {
                    backgroundColor: "#ced5df",
                  },
                }}
                onClick={() => handleJoin(listItem._id, currentUserId)}
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

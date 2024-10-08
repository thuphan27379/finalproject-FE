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
  const groups = useSelector((state) => state.group.list);

  // const currentUser = useSelector((state) => state.user.currentUser);
  // const membersList = useSelector((state) => state.group.members);
  // console.log("member", membersList);

  const [page, setPage] = useState(1);
  const { list, totalGroups } = useSelector(
    (state) => state.group,
    shallowEqual
  );
  // console.log(list);

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  // handleJoin, goi groupid ve api
  const handleJoin = async (currentGroupId, currentUserId) => {
    try {
      dispatch(joinGroup({ currentGroupId, currentUserId }));
      toast.success("Join a group successfully");
      navigate(`/group/${groupId}`); //?
    } catch (error) {
      console.log("User already joined");
    }
  };

  // navigate to groupPage /group/:groupId
  const handleNavigate = (groupId) => {
    navigate(`/group/${groupId}`); //?
  };

  // check members array, if have currentUserId, hide btn
  // currentUserId === members._id
  const isUserMember = (group) => {
    return group.members.some((member) => member._id === currentUserId);
  };

  //
  return (
    <>
      <Card
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
        sx={{ minWidth: "430px", minHeight: "250px" }}
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
            >
              <Typography
                key={listItem._id}
                onClick={() => {
                  handleNavigate(listItem._id);
                }}
              >
                * {listItem.name} - {listItem.members.length} members
              </Typography>

              {/* if already join, hide OR show Your Group OR leave */}
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  p: 0,
                  fontSize: 10,
                }}
                onClick={() => handleJoin(listItem._id, currentUserId)}
                disabled={listItem.members.includes(currentUserId)}
              >
                {listItem.members.includes(currentUserId) ? "Joined" : "Join"}
              </Button>

              {/* {isUserMember(listItem) ? (
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ p: 0, fontSize: 10 }}
                  onClick={() => handleLeave(listItem._id, currentUserId)}
                >
                  Joined
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ p: 0, fontSize: 10 }}
                  onClick={() => handleJoin(listItem._id, currentUserId)}
                >
                  Join
                </Button>
              )} */}
            </Box>
          ))}
        </Stack>
      </Card>
    </>
  );
}

export default GroupList;

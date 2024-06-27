import {
  Link,
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getList } from "./groupSlice";
import { GROUP_PER_PAGE } from "../../app/config";

// 2nd card: list of group, link to that group and with all post
function GroupList({ groupId }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { list, totalGroups, interests } = useSelector((state) => state.group);
  console.log(list);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  // handleJoin
  // const handleJoin = (groupId, userId) => {
  //   const confirm = window.confirm("Welcome to this group!");

  //   if (!confirm) return;

  //   handleJoin(groupId, userId);

  //   toast.success("Join group successfully");

  //   navigate("/group/:groupId");
  // };

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
            >
              <Typography key={listItem._id}>
                * {listItem.name} ({listItem.interests}) -{" "}
                {listItem.members.length} members
              </Typography>

              <Button
                color="secondary"
                variant="outlined"
                sx={{ p: 0, fontSize: 10 }}
                // onClick={handleJoin()}
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

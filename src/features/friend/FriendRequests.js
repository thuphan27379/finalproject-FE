import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Stack,
  Typography,
  Card,
  Box,
  Pagination,
  Grid,
  Container,
} from "@mui/material";

import UserCard from "./UserCard";
import SearchInput from "../../components/SearchInput";
import { getFriendRequests, cancelRequest } from "./friendSlice"; //

// incoming
function FriendRequests() {
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const {
    currentPageUsers,
    usersById,
    totalUsers,
    totalPages,
    incomingRequests, //
  } = useSelector((state) => state.friend);

  const users = currentPageUsers.map((userId) => usersById[userId]);

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  useEffect(() => {
    dispatch(getFriendRequests({ filterName, page })); // getFriendRequests
  }, [filterName, page, dispatch]);

  const handleCancelRequest = (targetUserId) => {
    dispatch(cancelRequest(targetUserId));
  };

  //
  return (
    <>
      <Container xs={8}>
        <Typography
          variant="h5"
          sx={{ mb: 3, paddingLeft: "40px", color: "#0A3161" }} //
        >
          Received Friend Requests List
        </Typography>

        <Card
          style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
          sx={{ p: 2 }}
        >
          <Stack spacing={2}>
            {/* Search Input and Pagination */}
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <SearchInput handleSubmit={handleSubmit} />
              {/* result, hide if not ? */}
              <Typography
                variant="subtitle"
                sx={{
                  // color: "#fff",
                  ml: 1,
                }}
              >
                {totalUsers > 1
                  ? `${totalUsers} users found`
                  : totalUsers === 1
                  ? `${totalUsers} user found`
                  : "No user found"}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Typography
                variant="subtitle"
                sx={{
                  // color: "#fff",
                  ml: 1,
                }}
              >
                {totalUsers > 1
                  ? `${totalUsers} requests`
                  : totalUsers === 1
                  ? `${totalUsers} request`
                  : "No request"}
              </Typography>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, page) => setPage(page)}
              />
            </Stack>
          </Stack>

          {/* Grid for displaying user cards */}
          <Grid container spacing={2} my={1} xs={18}>
            {users.map((user) => (
              //incomingRequests
              <Grid key={user._id} item xs={14} md={4}>
                <UserCard profile={user} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default FriendRequests;

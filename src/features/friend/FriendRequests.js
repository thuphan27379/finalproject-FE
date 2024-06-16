import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Card,
  Box,
  Pagination,
  Grid,
  Container,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getFriendRequests, cancelRequest } from "./friendSlice"; ////////////
import UserCard from "./UserCard";
import SearchInput from "../../components/SearchInput";

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
    incomingRequests, /////////
  } = useSelector((state) => state.friend);

  const users = currentPageUsers.map((userId) => usersById[userId]);

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  useEffect(() => {
    dispatch(getFriendRequests({ filterName, page })); //////////
  }, [filterName, page, dispatch]);

  const handleCancelRequest = (targetUserId) => {
    dispatch(cancelRequest(targetUserId));
  };

  //
  return (
    <>
      <Container xs={8}>
        <Typography variant="h5" sx={{ mb: 3, paddingLeft: "40px" }}>
          Received Friend Requests List
        </Typography>

        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            {/* Search Input and Pagination */}
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <SearchInput handleSubmit={handleSubmit} />
              <Box sx={{ flexGrow: 1 }} />
              <Typography
                variant="subtitle"
                sx={{ color: "text.secondary", ml: 1 }}
              >
                {totalUsers > 1
                  ? `${totalUsers} requests found`
                  : totalUsers === 1
                  ? `${totalUsers} request found`
                  : "No request found"}
              </Typography>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, page) => setPage(page)}
              />
            </Stack>
          </Stack>

          {/* Grid for displaying user cards */}
          <Grid container spacing={3} my={1} xs={18}>
            {users.map((user) => (
              ////////incomingRequests//////////////
              <Grid key={user._id} item xs={14} md={4}>
                <UserCard profile={user} />
                {/* Cancel Request button */}
                {/* <Button
                variant="outlined"
                color="error"
                onClick={() => handleCancelRequest(user._id)}
              >
                Cancel Request
              </Button> */}
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default FriendRequests;

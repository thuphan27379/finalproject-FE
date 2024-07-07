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

import { getOutgoingSents, cancelRequest } from "./friendSlice";
import UserCard from "./UserCard";
import SearchInput from "../../components/SearchInput";

// total request k cap nhat ??
// Outgoing
function OutgoingSents() {
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const {
    currentPageUsers,
    usersById,
    totalUsers,
    totalPages,
    outgoingRequests,
  } = useSelector((state) => state.friend);
  // console.log(outgoingRequests);

  const users = currentPageUsers.map((userId) => usersById[userId]);

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  useEffect(() => {
    dispatch(getOutgoingSents({ filterName, page }));
  }, [filterName, page, dispatch]);

  const handleCancelRequest = (targetUserId) => {
    dispatch(cancelRequest(targetUserId));
  };

  //
  return (
    <>
      <Container xs={8}>
        <Typography variant="h5" sx={{ mb: 3, paddingLeft: "40px" }}>
          Sent Friend Requests List
        </Typography>

        <Card
          style={{ border: "1px solid #c0d9f9", borderRadius: "3px" }}
          sx={{ p: 2 }}
        >
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
            {outgoingRequests.map((user) => (
              <Grid key={user._id} item xs={12} md={4}>
                <UserCard profile={user} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default OutgoingSents;

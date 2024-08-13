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

import { getOutgoingSents, cancelRequest } from "./friendSlice";
import UserCard from "./UserCard";
import SearchInput from "../../components/SearchInput";

// total request k cap nhat ?
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
    dispatch(getOutgoingSents({ filterName, page })); // getOutgoingSents
  }, [filterName, page, dispatch]);

  const handleCancelRequest = (targetUserId) => {
    dispatch(cancelRequest(targetUserId));
  };

  //
  return (
    <>
      <Container
        xs={8}
        sx={{
          width: "750px",
          marginLeft: "-20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, paddingLeft: "35px", color: "#0A3161" }}
        >
          Sent Friend Requests List
        </Typography>

        <Card
          style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
          sx={{
            p: 2,
            width: "750px",
            marginLeft: "-24px",
            marginTop: "-5px",
          }}
        >
          <Stack spacing={2}>
            {/* Search Input and Pagination */}
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <SearchInput handleSubmit={handleSubmit} />
              {/* result, hide if not ? */}
              <Typography
                variant="subtitle"
                sx={{
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
            {outgoingRequests.map((user) => (
              <Grid key={user._id} item xs={12} md={4}>
                <UserCard profile={user} />
              </Grid>
            ))}
          </Grid>
        </Card>

        <Box sx={{ flexGrow: 1 }} />
      </Container>
    </>
  );
}

export default OutgoingSents;

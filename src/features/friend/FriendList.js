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

import { getFriends } from "./friendSlice";
import UserCard from "./UserCard";
import SearchInput from "../../components/SearchInput";

// table of friend list
function FriendList() {
  // create all states
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const { currentPageUsers, usersById, totalUsers, totalPages } = useSelector(
    (state) => state.friend
  );
  // get data of friend
  const users = currentPageUsers.map((userId) => usersById[userId]);

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  useEffect(() => {
    dispatch(getFriends({ filterName, page }));
  }, [filterName, page, dispatch]);

  //
  return (
    <>
      <Container
        xs={8}
        // sx={{
        //   "& .MuiContainer-maxWidthLg, .css-1oqqzyl-MuiContainer-root, .css-0": {
        //     marginLeft: "-50px",
        //     paddingLeft: "-50px",
        //   },
        // }}
      >
        <Typography variant="h5" sx={{ mb: 3, paddingLeft: "40px" }}>
          Friends List
        </Typography>

        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <SearchInput handleSubmit={handleSubmit} />

              <Box sx={{ flexGrow: 1 }} />

              <Typography
                variant="subtitle"
                sx={{ color: "text.secondary", ml: 1 }}
              >
                {totalUsers > 1
                  ? `${totalUsers} friends found`
                  : totalUsers === 1
                  ? `${totalUsers} friend found`
                  : "No friend found"}
              </Typography>

              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, page) => setPage(page)}
              />
            </Stack>
          </Stack>

          {/* card list of friend  */}
          <Grid container spacing={3} my={1}>
            {users.map((user) => (
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

export default FriendList;

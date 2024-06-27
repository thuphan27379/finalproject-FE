import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Card,
  Box,
  TablePagination,
  Container,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "./friendSlice";
import UserTable from "./UserTable";
import SearchInput from "../../components/SearchInput";

// list of users
function AddFriend() {
  // create all states
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();

  // get current user id in every page
  const { currentPageUsers, usersById, totalUsers } = useSelector(
    (state) => state.friend
  );

  const users = currentPageUsers.map((userId) => usersById[userId]);

  // handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  // dispatch
  useEffect(() => {
    dispatch(getUsers({ filterName, page: page + 1, limit: rowsPerPage }));
  }, [filterName, page, rowsPerPage, dispatch]);

  //UI
  return (
    <>
      <Container width={"100%"}>
        <Grid
          item
          spacing={1}
          xs={8}
          paddingTop={0}
          marginTop={0}
          marginBottom={20}
        >
          <Typography variant="h5" sx={{ mb: 3, paddingLeft: "40px" }}>
            Add Friends
          </Typography>

          <Card sx={{ p: 3 }} width={"100%"} xs={8}>
            <Stack spacing={1} xs={8} width={"100%"}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                width={"100%"}
              >
                {/* SEARCH USERS */}
                <SearchInput handleSubmit={handleSubmit} />
                {/* result */}
                <Typography
                  variant="subtitle"
                  sx={{ color: "text.secondary", ml: 1 }}
                >
                  {totalUsers > 1
                    ? `${totalUsers} users found`
                    : totalUsers === 1
                    ? `${totalUsers} user found`
                    : "No user found"}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* pagination !!!!!!!!!! */}
                <TablePagination
                  sx={{
                    "& .MuiTablePagination-selectLabel, .MuiTablePagination-select, .MuiTablePagination-selectIcon":
                      {
                        display: { xs: "none", md: "block" },
                        alignItems: "center",
                        justifyContent: "center",
                      },
                  }}
                  component="div"
                  count={totalUsers ? totalUsers : 0}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 25]}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Stack>

              {/* TABLE LIST OF USERS */}
              <UserTable users={users} />
            </Stack>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default AddFriend;

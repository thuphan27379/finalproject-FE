import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Stack,
  Typography,
  Card,
  Box,
  TablePagination,
  Container,
  Grid,
} from "@mui/material";

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

  // search
  const handleSubmit = (searchQuery) => {
    setFilterName(searchQuery);
  };

  // dispatch
  useEffect(() => {
    dispatch(getUsers({ filterName, page: page + 1, limit: rowsPerPage }));
  }, [filterName, page, rowsPerPage, dispatch]);

  // UI
  return (
    <>
      <Container width={"100%"}>
        <Grid
          item
          spacing={1}
          xs={8}
          paddingTop={0}
          marginTop={0}
          marginBottom={10}
        >
          <Typography
            variant="h5"
            sx={{ mb: 3, paddingLeft: "40px", color: "#0A3161" }} //
          >
            Add Friends
          </Typography>

          <Card
            style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
            sx={{ p: 1.5 }}
            width={"100%"}
            xs={8}
          >
            <Stack spacing={1} xs={8} width={"100%"}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                width={"100%"}
              >
                {/* SEARCH USERS result count, hide if not ?*/}
                <SearchInput handleSubmit={handleSubmit} />
                {/* result */}
                <Typography variant="subtitle" sx={{ color: "#fff", ml: 1 }}>
                  {totalUsers > 1
                    ? `${totalUsers} users found`
                    : totalUsers === 1
                    ? `${totalUsers} user found`
                    : "No user found"}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* pagination */}
                <TablePagination
                  sx={{
                    "& .MuiTablePagination-selectLabel, .MuiTablePagination-select, .MuiTablePagination-selectIcon":
                      {
                        display: { xs: "none", md: "block" },
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    color: "#fff", // work
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

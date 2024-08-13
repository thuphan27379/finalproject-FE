import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Stack,
  Typography,
  Card,
  Box,
  TablePagination,
  Container,
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
      <Container
        sx={{
          width: "750px",
          marginLeft: "-20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, paddingLeft: "40px", color: "#0A3161" }}
        >
          Add Friends
        </Typography>

        <Card
          style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
          sx={{
            p: 1.5,
            width: "750px",
            marginLeft: "-24px",
            marginTop: "-5px",
          }}
        >
          <Stack spacing={1}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              {/* SEARCH USERS result count, hide if not ?*/}
              <SearchInput handleSubmit={handleSubmit} />
              {/* result */}
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

              {/* pagination, khong chinh duoc css */}
              <TablePagination
                sx={{
                  padding: "unset",
                  paddingLeft: "0px",
                  paddingRight: "0px",
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
      </Container>
    </>
  );
}

export default AddFriend;

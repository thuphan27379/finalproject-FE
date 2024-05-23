import React from "react";
import {
  Table,
  TableHead,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Link,
  TableContainer,
  Box,
} from "@mui/material"; //table of friend list
import { Link as RouterLink } from "react-router-dom"; //link to profile of user

import useAuth from "../../hooks/useAuth"; //de lay thong tin cua tung user
import FriendStatus from "./FriendStatus";
import ActionButton from "./ActionButton";

// func UserTable : show list of users
function UserTable({ users }) {
  const { user } = useAuth();
  const currentUserId = user?._id;

  //
  const getActionsAndStatus = (targetUser) => {
    const props = {
      currentUserId: currentUserId,
      targetUserId: targetUser._id,
      friendship: targetUser.friendship,
    };
    return {
      status: <FriendStatus {...props} />,
      action: <ActionButton {...props} />,
    };
  };

  //
  return (
    <Box sx={{ overflowX: "auto" }} xs={8}>
      <TableContainer sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: { xs: "20%", sm: "25%" } }}>
                Name
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Email
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Job Title
              </TableCell>
              <TableCell
                sx={{ display: { xs: "none", sm: "table-cell" }, width: "20%" }}
              >
                Status
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => {
              const { status, action } = getActionsAndStatus(user);
              return (
                <TableRow key={user._id} hover>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Avatar
                      alt={user.name}
                      src={user.avatarUrl}
                      sx={{ mr: 2 }}
                    />
                    <Link
                      variant="subtitle2"
                      sx={{ fontWeight: 600 }}
                      component={RouterLink}
                      to={`/user/${user._id}`}
                    >
                      {user.name}
                    </Link>
                  </TableCell>
                  {/* email */}
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", md: "table-cell" } }}
                  >
                    {user.email}
                  </TableCell>
                  {/* job */}
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", md: "table-cell" } }}
                  >
                    {user.jobTitle}
                  </TableCell>
                  {/* status */}
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", sm: "table-cell" } }}
                  >
                    {status}
                  </TableCell>
                  {/* actions */}
                  <TableCell align="left">{action}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserTable;

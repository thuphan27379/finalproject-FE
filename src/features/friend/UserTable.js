import React from "react";
import { Link as RouterLink } from "react-router-dom"; //link to profile of user
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
    // console.log(targetUser);
    return {
      status: <FriendStatus {...props} />,
      action: <ActionButton {...props} />,
    };
  };

  //
  return (
    <>
      <Box sx={{ overflowX: "auto" }} xs={8}>
        <TableContainer sx={{ minWidth: 810, borderColor: "#0A3161" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    width: {
                      xs: "20%",
                      sm: "25%",
                      fontWeight: "600",
                      minWidth: "165px",
                      color: "#fff",
                      borderColor: "#0A3161",
                    },
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "table-cell",
                      fontWeight: "600",
                      minWidth: "250px",
                      color: "#fff",
                      borderColor: "#0A3161",
                    },
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "table-cell",
                      borderColor: "#0A3161",
                    },
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    width: "20%",
                    fontWeight: "600",
                    color: "#fff",
                    borderColor: "#0A3161",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    width: "20%",
                    fontWeight: "600",
                    color: "#fff",
                    borderColor: "#0A3161",
                  }}
                >
                  Action
                </TableCell>
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
                        borderColor: "#0A3161",
                      }}
                    >
                      <Avatar
                        alt={user.name}
                        src={user.avatarUrl}
                        sx={{ mr: 2, mb: 1, mt: 1, borderColor: "#0A3161" }}
                      />
                      <Link
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          borderColor: "#0A3161",
                          "& .css-skr1o3-MuiTypography-root-MuiLink-root .css-142n4nt-MuiTypography-root-MuiLink-root":
                            { color: "#fff" }, // ?
                        }}
                        component={RouterLink}
                        to={`/user/${user._id}`}
                      >
                        {user.name}
                      </Link>
                    </TableCell>
                    {/* email */}
                    <TableCell
                      align="left"
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          paddingRight: "31px", //
                          color: "#fff",
                          borderColor: "#0A3161",
                        },
                      }}
                    >
                      {user.email}
                    </TableCell>
                    {/* job */}
                    <TableCell
                      align="center"
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          borderColor: "#0A3161",
                        },
                      }}
                    >
                      {/* {user.jobTitle} */}
                    </TableCell>
                    {/* status */}
                    <TableCell
                      align="left"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "table-cell",
                          borderColor: "#0A3161",
                        },
                      }}
                    >
                      {status}
                    </TableCell>
                    {/* actions */}
                    <TableCell
                      align="left"
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          paddingRight: "70px",
                          borderColor: "#0A3161",
                        },
                      }}
                    >
                      {action}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default UserTable;

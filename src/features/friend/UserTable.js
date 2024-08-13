import React from "react";
import { Link as RouterLink } from "react-router-dom"; // link to profile of user
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
} from "@mui/material"; // table of friend list

import useAuth from "../../hooks/useAuth"; // de lay thong tin cua tung user
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
      <Box sx={{ overflowX: "auto", width: "750px" }} xs={8}>
        <TableContainer sx={{ borderColor: "#0A3161", width: "750px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    width: {
                      xs: "20%", // responsive
                      sm: "25%",
                      fontWeight: "600",
                      minWidth: "100px",
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
                      minWidth: "150px",
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
                      width: "0px",
                    },
                  }}
                ></TableCell>

                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    width: "20%",
                    fontWeight: "600",
                    borderColor: "#0A3161",
                    minWidth: "150px",
                  }}
                >
                  Status
                </TableCell>

                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    width: "20%",
                    fontWeight: "600",
                    borderColor: "#0A3161",
                    minWidth: "150px",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => {
                const { status, action } = getActionsAndStatus(user);
                //
                return (
                  <TableRow key={user._id} hover>
                    {/* avt + user name */}
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
                          minWidth: "100px",
                          fontWeight: 600,
                          borderColor: "#0A3161",
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
                          paddingRight: "30px",
                          borderColor: "#0A3161",
                          minWidth: "120px",
                        },
                      }}
                    >
                      {user.email}
                    </TableCell>

                    {/* job KHONG CO*/}
                    <TableCell
                      align="center"
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          borderColor: "#0A3161",
                          width: "0px",
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
                          minWidth: "120px",
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
                          minWidth: "90px",
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

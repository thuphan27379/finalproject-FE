import React from "react";
import { Link, Typography, Stack } from "@mui/material";

//
function MainFooter() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "black",
          minWidth: "100%",
          marginLeft: "-24px",
          marginRight: "-24px",
          // marginTop: "20px",
          minHeight: "50px",
        }}
      >
        <Typography variant="body2" color="white" align="center" p={2}>
          {"© "} Copyright 2000-{new Date().getFullYear()} |{" "}
          <Link color="inherit" href="">
            BizHolding, Inc
          </Link>
          {"."} | Terms | Policy | Security
        </Typography>
      </Stack>
    </>
  );
}

export default MainFooter;

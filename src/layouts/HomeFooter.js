import React from "react";
import { Link, Typography, Stack } from "@mui/material";

//
function HomeFooter() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#000",
          minWidth: "100%",
          marginLeft: "-24px",
          marginRight: "-24px",
          minHeight: "50px",
          borderTop: "1px solid #0A3161",
          marginTop: "50px",
        }}
      >
        <Typography variant="body2" color="#fff" align="center" p={2}>
          {"© "} 2000 - {new Date().getFullYear()}{" "}
          <Link color="inherit" href="/">
            BizHolding, Inc
          </Link>
          {"."} All Rights Reserved | Terms | Policy | Security
        </Typography>
      </Stack>
    </>
  );
}

export default HomeFooter;

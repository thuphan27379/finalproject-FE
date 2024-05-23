import React from "react";
import { Link, Typography } from "@mui/material";

//
function MainFooter() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"© "} 2000-{new Date().getFullYear()}{" "}
      <Link color="inherit" href="">
        My Company Inc
      </Link>
      {"."} Term Policy Security{"."}
    </Typography>
  );
}

export default MainFooter;

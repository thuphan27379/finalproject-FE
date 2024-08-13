import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

// login/register/not found page
function BlankLayout() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          paddingTop: "100px",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "center",
        }}
      >
        <HomeHeader />

        <Outlet />

        <Box sx={{ flexGrow: 1 }} />

        <HomeFooter />
      </Stack>
    </>
  );
}

export default BlankLayout;

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
        paddingTop={25}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#000", color: "#fff" }} //
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

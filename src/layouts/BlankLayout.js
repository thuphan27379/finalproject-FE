import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import React from "react";

import HomeHeader from "./HomeHeader";
import MainFooter from "./MainFooter";

// login/register/notfound page
function BlankLayout() {
  return (
    <>
      <Stack
        paddingTop={25}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <HomeHeader />

        <Outlet />

        <Box sx={{ flexGrow: 1 }} />

        <MainFooter />
      </Stack>
    </>
  );
}

export default BlankLayout;

import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import MainFooter from "./MainFooter";

import { ThemeContext } from "../ThemeContext"; //

//
// className={theme}
function HomeLayout() {
  const context = useContext(ThemeContext);

  return (
    <>
      <Container
        sx={{
          minWidth: "unset",
          maxWidth: "unset!important",
          marginX: "auto",
          paddingLeft: "60px",
          paddingRight: "60px",
          minWidth: "unset", //
          maxWidth: "unset!important", //
        }}
        // className={context.theme}
      >
        <HomeHeader />

        <AlertMsg />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexGrow: 1,
            maxWidth: "unset",
            paddingLeft: "40px",
          }}
        >
          <div style={{ maxWidth: "240px", marginLeft: "60px" }}>
            <LeftBar />
          </div>

          <div
            className="outlet-wrapper"
            style={{ marginTop: "30px", minWidth: "60vw" }}
          >
            <Outlet />
          </div>

          <div style={{ maxWidth: "240px", marginRight: "60px" }}>
            <RightBar />
          </div>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <MainFooter />
      </Container>
    </>
  );
}

export default HomeLayout;

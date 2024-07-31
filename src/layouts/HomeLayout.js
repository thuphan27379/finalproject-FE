import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import HomeFooter from "./HomeFooter";

import { ThemeContext } from "../ThemeContext"; //

//
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
          backgroundColor: "#000", // back ground of site
          "& .css-11chnac-MuiButtonBase-root-MuiListItemButton-root": {
            paddingLeft: "10px",
            paddingRight: "0px",
          },
        }}
      >
        <HomeHeader />

        <AlertMsg />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexGrow: 1,
            maxWidth: "unset",
            paddingLeft: "15px",
          }}
        >
          <div style={{ maxWidth: "240px", marginLeft: "60px" }}>
            <LeftBar />
          </div>

          <div
            className="outlet-wrapper"
            style={{ marginTop: "20px", minWidth: "60vw" }}
          >
            <Outlet />
          </div>

          <div
            style={{
              maxWidth: "240px",
              marginRight: "60px",
              marginTop: "20px",
            }}
          >
            <RightBar />
          </div>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <HomeFooter sx={{ minHeight: "50px" }} />
      </Container>
    </>
  );
}

export default HomeLayout;

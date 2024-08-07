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
          "& .css-11chnac-MuiButtonBase-root-MuiListItemButton-root": {
            paddingLeft: "10px",
            paddingRight: 0,
          },
          // backgroundColor: "#000", // background of site
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
          <div flex={1} style={{ maxWidth: "240px", marginLeft: "60px" }}>
            <LeftBar />
          </div>

          <div
            flex={4}
            className="outlet-wrapper"
            style={{
              marginTop: "-50px",
              minWidth: "60vw",
              maxWidth: "850px", // ?
            }}
          >
            <Outlet />
          </div>

          <div
            flex={1}
            style={{
              maxWidth: "240px",
              marginRight: "60px",
              marginTop: "-50px",
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

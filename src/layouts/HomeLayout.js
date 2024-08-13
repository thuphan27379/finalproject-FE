import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import AlertMsg from "../components/AlertMsg";
import HomeHeader from "./HomeHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import HomeFooter from "./HomeFooter";
import { ThemeContext } from "../ThemeContext";

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
          paddingLeft: "50px",
          paddingRight: "60px",
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
          }}
        >
          <div flex={1} style={{ width: "240px", marginLeft: "65px" }}>
            <LeftBar />
          </div>

          <div
            flex={4}
            className="outlet-wrapper"
            style={{
              width: "750px",
              marginTop: "-50px",
            }}
          >
            <Outlet />
          </div>

          <div
            flex={1}
            style={{
              width: "240px",
              marginRight: "65px",
              marginTop: "-50px",
            }}
          >
            <RightBar />
          </div>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <HomeFooter sx={{ position: "fixed", maxHeight: "50px" }} />
      </Container>
    </>
  );
}

export default HomeLayout;

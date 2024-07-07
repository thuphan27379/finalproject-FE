import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import PostListWall from "../features/post/PostListWall";
import useAuth from "../hooks/useAuth";

// show all post of all user
// NEU CHUA LOG IN THI CUNG KHONG THAY TAB WALL
// khong dc delete hay edit post&comment cua nguoi khac ??
// post of group!!!
function Wall() {
  const { user } = useAuth();

  //render
  return (
    <>
      <Grid
        container
        spacing={1}
        width={"100%"}
        sx={{
          paddingTop: "5px", // work
          marginLeft: "-25px", //work
          paddingLeft: "17px",
          // borderRadius: "0px", //?
          "& .css-mencvv-MuiSvgIcon-root": { marginRight: "-10px" },
          "& .css-1sobm86-MuiPaper-root-MuiCard-root": {
            // borderRadius: "4px", //?
          },
          "& .css-p64cbd-MuiStack-root": { paddingRight: "40px" },
        }}
      >
        <Stack spacing={1} width={"100%"}>
          <Typography
            variant="h5"
            sx={{ mb: 3, paddingLeft: "40px", paddingTop: "0px" }}
          >
            Startup & Domain Community
          </Typography>
          <PostListWall
            p={1}
            sx={{
              "& .css-lbjakd-MuiStack-root > :not(style) ~ :not(style)": {
                marginTop: "40px", //??
              },
            }}
          />
        </Stack>
      </Grid>
    </>
  );
}

export default Wall;

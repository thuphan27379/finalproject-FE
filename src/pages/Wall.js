import React from "react";
import { Grid, Stack } from "@mui/material";

import PostListWall from "../features/post/PostListWall";
import useAuth from "../hooks/useAuth";

// show all post of all user
// NEU CHUA LOG IN THI CUNG KHONG THAY TAB WALL
// khong dc delete hay edit post&comment cua nguoi khac ????
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
          paddingTop: "10px", // work
          marginLeft: "-25px", //work
          paddingLeft: "17px",
          borderRadius: "1px",
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        <Stack spacing={2} width={"100%"}>
          <PostListWall p={1} />
        </Stack>
      </Grid>
    </>
  );
}

export default Wall;

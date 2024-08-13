import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import PostListWall from "../features/post/PostListWall";
import useAuth from "../hooks/useAuth";

// show all post of all user
// post of group! fromGroup false
function Wall() {
  const { user } = useAuth();

  //render
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          width: "750px",
          overflow: "scroll",
          marginTop: "20px",
          marginLeft: "-20px",
        }}
      >
        <Stack spacing={1} width={"100%"} sx={{ width: "750px" }}>
          <Typography
            variant="h5"
            sx={{
              width: "750px",
              color: "#0A3161",
              mb: 3,
              paddingTop: 0,
              marginTop: "30px",
              paddingLeft: "55px",
            }}
          >
            Startup & Domain Community
          </Typography>

          <PostListWall
            p={2}
            sx={{
              width: "750px",
              paddingLeft: "-15px",
              marginTop: "40px",
              paddingTop: "30px",
            }}
          />
        </Stack>
      </Grid>
    </>
  );
}

export default Wall;

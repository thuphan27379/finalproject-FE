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
        width={"100%"} // maxWidth: "850px",
        sx={{
          maxWidth: "850px",
          paddingTop: "5px", // work
          marginLeft: 0, // work
          paddingLeft: "23px",
          "& .css-mencvv-MuiSvgIcon-root": { marginRight: "-10px" },
          "& .css-p64cbd-MuiStack-root": { paddingRight: "40px" },
        }}
      >
        <Stack spacing={1} width={"100%"} sx={{ maxWidth: "850px" }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              paddingLeft: "40px",
              paddingTop: 0,
              color: "#0A3161",
              maxWidth: "850px",
              marginTop: "20px",
            }}
          >
            Startup & Domain Community
          </Typography>

          <PostListWall
            p={1}
            sx={{
              maxWidth: "850px",
              paddingTop: "20px",
              marginTop: "50px", //?? why not work
              "& .css-lbjakd-MuiStack-root > :not(style) ~ :not(style)": {
                marginTop: "50px", //?? why not work
              },
            }}
          />
        </Stack>
      </Grid>
    </>
  );
}

export default Wall;

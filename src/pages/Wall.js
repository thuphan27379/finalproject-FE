import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import PostListWall from "../features/post/PostListWall";
import useAuth from "../hooks/useAuth";

// show all post of all user
// post of group!!!
// fromGroup false //
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
          "& .css-1sobm86-MuiPaper-root-MuiCard-root": {},
          "& .css-p64cbd-MuiStack-root": { paddingRight: "40px" },
        }}
      >
        <Stack spacing={1} width={"100%"}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              paddingLeft: "40px",
              paddingTop: "0px",
              color: "#0A3161",
            }}
          >
            Startup & Domain Community
          </Typography>

          <PostListWall
            p={1}
            sx={{
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

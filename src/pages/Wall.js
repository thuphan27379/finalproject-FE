import React from "react";
import { Grid, Stack } from "@mui/material";

import PostListWall from "../features/post/PostListWall";

// show own info & enterprise
function Wall() {
  //render
  return (
    <>
      <Grid
        container
        spacing={3}
        width={"100%"}
        sx={{
          paddingTop: "0px", // work
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        {/* left sidebar 4/12 */}
        <Grid
          item
          xs={8}
          md={12}
          sx={{
            paddingTop: "0px", //?
            paddingBottom: "20px", //work
            paddingLeft: "unset", //?
            // padding: "0",
            marginLeft: "-24px", //work
            marginRight: "0px", //?
            paddingRight: "0px", //?
          }}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              "& .css-13mhfsw-MuiGrid-root, .css-1q7661i-MuiGrid-root": {
                maxWidth: "100%",
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-13mhfsw-MuiGrid-root > .MuiGrid-item": {
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-15yln57-MuiStack-root > :not(style) ~ :not(style)": {
                maxWidth: "30%",
              },
              paddingLeft: "0px",
              paddingTop: "0px",
            }}
          ></Stack>
        </Grid>

        {/* center content 8/12 */}
        {/* SET GRID - MAIN BODY OUTLET */}
        <Grid container>
          <Stack spacing={3} width={"100%"}>
            <PostListWall />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Wall;

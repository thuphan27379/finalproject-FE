import { Box, CircularProgress } from "@mui/material"; // Loading icon
import React from "react";

// vong tron nam lech ben phai ?
function LoadingScreen() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default LoadingScreen;

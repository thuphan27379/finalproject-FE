import React from "react";
import { Container, Box } from "@mui/material";

//
function UserChat() {
  return (
    <>
      <Container
        sx={{
          width: "750px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#0A3161",
          fontSize: "21px",
          marginLeft: "-20px",
        }}
      >
        <Box sx={{ marginLeft: "35px" }}>
          Simple Chat between Users. Coming soon!
        </Box>

        <Box sx={{ flexGrow: 1 }} />
      </Container>
    </>
  );
}

export default UserChat;

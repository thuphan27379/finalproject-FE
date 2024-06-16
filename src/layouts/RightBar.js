import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// homepage: domain..
// LINK TO PAGE
export default function RightBar() {
  return (
    <>
      <Box
        sx={{
          color: "#04214a",
          fontWeight: "1000",
          marginTop: "50px",
          width: "240px",
          paddingRight: "10px",
          marginRight: "50px",
          fontSize: "20px",
        }}
      >
        <List
          sx={{
            color: "#04214a",
            fontWeight: "1500",
            width: "240px",
            paddingRight: "0px",
            // width: "25vw",
            marginTop: "54px",
            fontSize: "20px",
          }}
        ></List>

        <List sx={{ color: "#0A3161", fontSize: "20px", fontWeight: "1500" }}>
          {[
            "Startup Support Program",
            "Our Projects",
            "Cooperate with us",
            "Domains for sale",
            "Your Domains",
            "Donate us",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

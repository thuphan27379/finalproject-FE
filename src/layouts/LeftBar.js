import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import FitbitOutlinedIcon from "@mui/icons-material/FitbitOutlined";

// homepage: company tabs
// LINK TO PAGE
export default function LeftBar() {
  return (
    <>
      <Box
        sx={{
          marginTop: "90px",
          minHeight: "120vh",
          marginLeft: "-35px",
        }}
      >
        <List
          sx={{
            color: "#04214a",
            fontWeight: "1000",
            width: "240px",
            lineHeight: 1,
          }}
        >
          {[
            "Startup Support Program",
            "Our Projects",
            "Cooperate with us",
            "Domains for sale",
            "Your Domains",
            "Our Services",
            "Donate us",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <FitbitOutlinedIcon fontSize="small" color="secondary" />
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

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
          fontWeight: "700", //?
        }}
      >
        <List
          sx={{
            color: "#04214a",
            fontWeight: "700", //?
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
            <ListItem
              key={index}
              disablePadding
              sx={{
                fontWeight: "700", //?
              }}
            >
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

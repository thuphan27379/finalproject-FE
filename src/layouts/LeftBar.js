import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

// homepage: company tabs
// LINK TO PAGE
export default function LeftBar() {
  return (
    <>
      <Box
        sx={{
          width: "240px",
          marginTop: "20px",
          minHeight: "120vh",
          marginLeft: "30px",
          display: { xs: "none", sm: "none", md: "block", lg: "block" }, // responsive
        }}
      >
        <List
          sx={{
            position: "fixed",
            fontWeight: "700",
            width: "240px",
            lineHeight: 1,
          }}
        >
          {[
            "Startup Sponsorship",
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
                fontWeight: "700",
              }}
            >
              <GradeOutlinedIcon fontSize="medium" color="secondary" />
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

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined"; // star

// homepage: company tabs
// LINK TO PAGE
export default function LeftBar() {
  return (
    <>
      <Box
        sx={{
          width: "240px",
          marginTop: "90px",
          minHeight: "120vh",
          marginLeft: "-35px",
        }}
      >
        <List
          sx={{
            color: "#fff",
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
              <GradeOutlinedIcon fontSize="small" color="secondary" />
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

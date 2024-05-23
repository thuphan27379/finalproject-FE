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
    <Box
      sx={{
<<<<<<< HEAD
        color: "#04214a",
        fontWeight: "1000",
        marginTop: "90px",
        width: "240px",
        paddingRight: "40px",
        marginRight: "50px",
      }}
    >
      <List
        sx={{
          color: "#04214a",
          fontWeight: "1000",
          width: "240px",
          paddingRight: "10px", //
        }}
      >
=======
        // width: "25vw",
        marginTop: "90px",
      }}
    >
      {/* <CssBaseline /> */}

      <List sx={{ color: "#0A3161" }}>
>>>>>>> 5580e5d7533b101092ad6f56a8a828c2ebe0053c
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
      {/* </Drawer> */}
    </Box>
  );
}

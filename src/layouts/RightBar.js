import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import FitbitOutlinedIcon from "@mui/icons-material/FitbitOutlined";
import LensBlurOutlinedIcon from "@mui/icons-material/LensBlurOutlined";

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
            "Domain Value Appraisal",
            "Find a Domain Owner",
            "Domain Investing",
            "Auctions for Domains",
            "Transfer Domain Names",
            "Free Subdomain & Email",
            "Hosting & e-Marketing",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <LensBlurOutlinedIcon fontSize="small" color="secondary" />
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

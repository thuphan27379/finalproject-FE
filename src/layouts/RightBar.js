import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

//
export default function RightBar() {
  return (
    <>
      <Box
        sx={{
          width: "240px",
          marginTop: "70px",
          paddingRight: "30px",
          display: { xs: "none", sm: "none", md: "none", lg: "block" }, // responsive
          "& .css-tlelie-MuiListItemText-root": { marginBottom: 0 },
        }}
      >
        <List
          sx={{
            position: "fixed",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: 1,
            // color: "#fff",
          }}
        >
          {[
            "Domain Value Appraisal",
            "Find a Domain Owner",
            "Domain Investing",
            "Auction for Domain",
            "Transfer Domain Name",
            "Free SubDomain & Email",
            "Hosting & eMarketing",
          ].map((text, index) => (
            <ListItem key={index} disablePadding>
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

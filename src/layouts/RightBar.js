import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined"; // star

// homepage: domain..
// LINK TO PAGE
export default function RightBar() {
  return (
    <>
      <Box
        sx={{
          width: "240px",
          marginTop: "70px",
          paddingRight: "10px",
          marginRight: "50px",
        }}
      >
        <List
          sx={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: 1,
          }}
        >
          {[
            "Domain Value Appraisal",
            "Find a Domain Owner",
            "Domain Investing",
            "Auction for Domains",
            "Transfer Domain Names",
            "Free SubDomain & Email",
            "Hosting & eMarketing",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
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

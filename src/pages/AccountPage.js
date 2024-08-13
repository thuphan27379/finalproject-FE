import React, { useState } from "react";
import { Container, Tab, Box, Tabs, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { capitalCase } from "change-case";

import AccountGeneral from "../features/user/AccountGeneral";
import AccountSocialLinks from "../features/user/AccountSocialLinks";

// account setting: for updating account info of user
function AccountPage() {
  const [currentTab, setCurrentTab] = useState("general");

  const ACCOUNT_TABS = [
    {
      value: "general",
      icon: <AccountBoxOutlinedIcon sx={{ fontSize: 25 }} />,
      component: <AccountGeneral />,
    },
    {
      value: "links",
      icon: <ShareIcon sx={{ fontSize: 25 }} />,
      component: <AccountSocialLinks />,
    },
  ];

  //
  return (
    <>
      <Container
        sx={{
          width: "750px",
          paddingTop: "90px",
          marginLeft: "3px",
          marginBottom: "200px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#0a3161",
            paddingLeft: "30px",
          }}
        >
          Account Settings
        </Typography>

        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={(e, value) => setCurrentTab(value)}
        >
          {ACCOUNT_TABS?.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={capitalCase(tab.value)}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>

        {/* component */}
        <Box sx={{ mb: 3 }} />
        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return (
            isMatched && (
              <Box key={tab.value} sx={{ marginLeft: "-24px" }}>
                {tab.component}
              </Box>
            )
          );
        })}
      </Container>
    </>
  );
}

export default AccountPage;

import React, { useState } from "react";
import { Container, Tab, Box, Tabs, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShareIcon from "@mui/icons-material/Share";
import { capitalCase } from "change-case";

import AccountGeneral from "../features/user/AccountGeneral";
import AccountSocialLinks from "../features/user/AccountSocialLinks";

// CODERCOMM
// account setting: for updating account info of user
function AccountPage() {
  const [currentTab, setCurrentTab] = useState("general");

  const ACCOUNT_TABS = [
    {
      value: "general",
      icon: <AccountBoxIcon sx={{ fontSize: 30 }} />,
      component: <AccountGeneral />,
    },
    {
      value: "social_links",
      icon: <ShareIcon sx={{ fontSize: 30 }} />,
      component: <AccountSocialLinks profile={{}} />,
    },
  ];

  //
  return (
    <Container sx={{ paddingTop: "90px" }}>
      <Typography variant="h5" gutterBottom>
        Account Settings
      </Typography>

      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={(e, value) => setCurrentTab(value)}
      >
        {ACCOUNT_TABS.map((tab) => (
          <Tab
            disableRipple
            key={tab.value}
            label={capitalCase(tab.value)}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>

      <Box sx={{ mb: 5 }} />
      {/* component */}
      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  );
}

export default AccountPage;

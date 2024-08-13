import React, { useState } from "react";
import { capitalCase } from "change-case";
import { Box, Card, Container, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import MarkUnreadChatAltOutlined from "@mui/icons-material/MarkUnreadChatAltOutlined";
import SpatialTrackingOutlinedIcon from "@mui/icons-material/SpatialTrackingOutlined";
import SpatialAudioOffOutlinedIcon from "@mui/icons-material/SpatialAudioOffOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import useAuth from "../hooks/useAuth";
import UserChat from "../features/chat/UserChat";
import Profile from "../features/user/Profile";
import AddFriend from "../features/friend/AddFriend";
import FriendRequests from "../features/friend/FriendRequests";
import FriendList from "../features/friend/FriendList";
import OutgoingSents from "../features/friend/OutgoingSent";
import Wall from "./Wall";
import GroupPage from "./GroupPage";

// blogpage, profile tabs
const TabsWrapperStyle = styled("div")(({ theme }) => ({
  minWidth: "750px",
  zIndex: 9,
  bottom: 0,
  display: "flex",
  position: "absolute",
  paddingLeft: 0,
  marginLeft: 0,
  paddingRight: 0,
  marginRight: 0,
  justifyContent: "space-between",
  // responsive
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(1),
  },
}));

//
function BlogPage(profile) {
  const { user } = useAuth();
  // console.log(user);
  const [currentTab, setCurrentTab] = useState("profile");

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue); // value <=> newValue
  };

  //
  const PROFILE_TABS = [
    {
      value: "wall",
      icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <Wall />,
    },
    {
      value: "profile",
      icon: <CoPresentOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <Profile profile={user} />, // route /user/:id
    },
    {
      value: "group",
      icon: <Diversity1OutlinedIcon sx={{ fontSize: 24 }} />,
      component: <GroupPage />, //
    },
    {
      value: "friends",
      icon: <ContactEmergencyOutlinedIcon sx={{ fontSize: 25 }} />,
      component: <FriendList />,
    },
    {
      value: "add_friends",
      icon: <PeopleAltOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <AddFriend />,
    },
    // incoming BO!!!
    {
      value: "friend_requests",
      icon: <SpatialTrackingOutlinedIcon sx={{ fontSize: 23 }} />,
      component: <FriendRequests />,
    },
    // outgoing BO!!!
    {
      value: "sent_requests",
      icon: <SpatialAudioOffOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <OutgoingSents />,
    },
    {
      value: "chat",
      icon: <MarkUnreadChatAltOutlined sx={{ fontSize: 22 }} />,
      component: <UserChat />,
    },
  ];

  // render
  return (
    <>
      <Container
        sx={{
          width: "750px",
          marginTop: "95px",
        }}
      >
        <Card
          sx={{
            width: "750px",
            mb: 3,
            height: 42,
            position: "relative",
            lineHeight: 0,
          }}
          style={{
            width: "750px",
            border: "1px solid #0A3161",
            borderRadius: "3px",
            marginLeft: "-20px",
          }}
        >
          {/* tabs Wrapper*/}
          <TabsWrapperStyle
            sx={{
              width: "750px",
              paddingLeft: 0,
            }}
          >
            <Tabs
              sx={{
                paddingLeft: 0,
                marginLeft: 0,
                bottom: "40px",
              }}
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={(e, value) => handleChangeTab(value)}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  sx={{
                    paddingLeft: 0,
                    marginLeft: 0,
                  }}
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {/* render component of every tab when click on */}
        {/* content body cua cac tabs AddFriend, FriendList, FriendRequest, OutgoingSent */}
        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return (
            isMatched && (
              <Box
                key={tab.value}
                sx={{
                  width: "750px",
                }}
              >
                {tab.component}
              </Box>
            )
          );
        })}
      </Container>
    </>
  );
}

export default BlogPage;

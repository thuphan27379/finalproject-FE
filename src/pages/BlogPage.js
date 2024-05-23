import React, { useState } from "react";
import { Box, Card, Container, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { capitalCase } from "change-case";

import useAuth from "../hooks/useAuth";
import Profile from "../features/user/Profile";
import AddFriend from "../features/friend/AddFriend";
import FriendRequests from "../features/friend/FriendRequests";
import FriendList from "../features/friend/FriendList";
import OutgoingSents from "../features/friend/OutgoingSent";
import Group from "../features/group/Group";
import UserChat from "../features/chat/UserChat";

// CODERCOMM - blogpage
// user profile page
const TabsWrapperStyle = styled("div")(({ theme }) => ({
  // MUI styled() for cover
  zIndex: 9,
  bottom: 0,
  width: "100%",
  display: "flex",
  position: "absolute",
  backgroundColor: "#fff",
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
    paddingRight: theme.spacing(3),
  },
}));

//
function BlogPage() {
  const { user } = useAuth();
  const [currentTab, setCurrentTab] = useState("profile");
  console.log(user);

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };
  //
  const PROFILE_TABS = [
    // Wall: postForm, postList, comment & reaction
    // Friend: user list for send request, friend list for delete friend
    // Request: incoming list for accept, outgoing list for cancel
    // Group:
    // Chat:
    // Profile: show own info & enterprise
    // Setting: update profile

    {
      value: "profile",
      icon: <AccountBoxIcon sx={{ fontSize: 24 }} />,
      component: <Profile profile={user} />,
    },
    {
      value: "friends",
      icon: <PeopleAltIcon sx={{ fontSize: 24 }} />,
      component: <FriendList />,
    },
    // incoming
    {
      value: "friend_requests",
      icon: <ContactMailIcon sx={{ fontSize: 23 }} />,
      component: <FriendRequests />,
    },
    {
      value: "add_friend",
      icon: <PersonAddRoundedIcon sx={{ fontSize: 24 }} />,
      component: <AddFriend />,
    },
    // outgoing
    // User can see a list of requests that he/she has sent.
    // On the list, User can cancel the requests.
    // API: GET /api/friends/requests/outgoing
    {
      value: "sent_request",
      icon: <GroupAddIcon sx={{ fontSize: 24 }} />,
      component: <OutgoingSents />,
    },
    {
      value: "group",
      icon: <Diversity3Icon sx={{ fontSize: 25 }} />,
      component: <Group />,
    },
    {
      value: "chat",
      icon: <MarkUnreadChatAltIcon sx={{ fontSize: 22 }} />,
      component: <UserChat />,
    },
  ];
  // render
  return (
    <Container sx={{ marginTop: "95px" }}>
      {/* tab bo o trong Card? */}
      <Card
        sx={{
          mb: 3,
          height: 42,
          position: "relative",
          paddingLeft: 0,
          marginLeft: 0,
          lineHeight: 0,
        }}
      >
        {/* tabs*/}
        <TabsWrapperStyle sx={{ paddingLeft: 0, marginLeft: 0 }}>
          <Tabs
            sx={{ paddingLeft: 0, marginLeft: 0 }}
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={(e, value) => handleChangeTab(value)}
          >
            {PROFILE_TABS.map((tab) => (
              <Tab
                sx={{ paddingLeft: 0, marginLeft: 0 }}
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
      {PROFILE_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Container>
  );
}

export default BlogPage;

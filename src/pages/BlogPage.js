import React, { useState } from "react";
import { Box, Card, Container, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ContactMailOutlined from "@mui/icons-material/ContactMailOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import MarkUnreadChatAltOutlined from "@mui/icons-material/MarkUnreadChatAltOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { capitalCase } from "change-case";
import { Grid, Stack } from "@mui/material";

import useAuth from "../hooks/useAuth";
import Profile from "../features/user/Profile";
import AddFriend from "../features/friend/AddFriend";
import FriendRequests from "../features/friend/FriendRequests";
import FriendList from "../features/friend/FriendList";
import OutgoingSents from "../features/friend/OutgoingSent";
import Group from "../features/group/Group";
import UserChat from "../features/chat/UserChat";
import UserProfilePage from "./UserProfilePage";

import PostForm from "C:/Users/Public/finalproject-frontend/src/features/post/PostForm.js";
import PostList from "C:/Users/Public/finalproject-frontend/src/features/post/PostList.js";
import Wall from "./Wall";

// CODERCOMM - blogpage
// user profile page
const TabsWrapperStyle = styled("div")(({ theme }) => ({
  // MUI styled() for cover & tabs NEU KHONG XAI THI BO DI
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
function BlogPage(profile) {
  const { user } = useAuth();
  const [currentTab, setCurrentTab] = useState("profile");
  console.log(user);

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };
  //
  const PROFILE_TABS = [
    // Wall: postForm, postList, comment & reaction
    // Profile: show own info & enterprise
    // Friend: user list for send request, friend list for delete friend
    // Request: incoming list for accept-received, sent outgoing list for cancel
    // Group:
    // Chat:

    {
      value: "wall",
      icon: <RssFeedIcon sx={{ fontSize: 24 }} />,
      // route /blog
      component: <Wall />, //tabs, postForm, postList, commentForm, commentList
    },
    {
      value: "profile",
      icon: <AccountBoxOutlinedIcon sx={{ fontSize: 24 }} />,
      // route /user/:id
      component: <UserProfilePage profile={user} />, //---->>>useProfilePage !!!!!!!!!!!!!
      // component: <Profile profile={user} />, //---->>>useProfilePage !!!!!!!!!!!!!
    },
    {
      value: "friends",
      icon: <PeopleAltOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <FriendList />,
    },
    {
      value: "add_friend",
      icon: <PersonAddOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <AddFriend />,
    },
    // incoming
    {
      value: "friend_requests",
      icon: <ContactMailOutlined sx={{ fontSize: 23 }} />,
      component: <FriendRequests />,
    },
    // outgoing
    // User can see a list of requests that he/she has sent.
    // On the list, User can cancel the requests.
    // API: GET /api/friends/requests/outgoing
    {
      value: "sent_request",
      icon: <GroupAddOutlinedIcon sx={{ fontSize: 24 }} />,
      component: <OutgoingSents />,
    },
    {
      value: "group",
      icon: <Diversity1OutlinedIcon sx={{ fontSize: 24 }} />,
      component: <Group />,
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
      <Container sx={{ marginTop: "95px" }}>
        {/* tab bo o trong Card? */}
        <Card
          sx={{
            mb: 3,
            height: 42,
            position: "relative",
            paddingLeft: 0,
            marginLeft: "-24px",
            lineHeight: 0,
            marginRight: "24px",
          }}
        >
          {/* tabs Wrapper*/}
          <TabsWrapperStyle sx={{ paddingLeft: 0, marginLeft: 0 }}>
            <Tabs
              sx={{ paddingLeft: 0, marginLeft: 0, bottom: "40px" }}
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
        {/* content body cua cac tabs AddFriend, FriendList, FriendRequest, OutgoingSent */}
        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return (
            isMatched && (
              <Box
                key={tab.value}
                sx={{
                  "& .css-1oqqzyl-MuiContainer-root": {
                    marginLeft: "-48px",
                    marginRight: "-5px", //
                    width: "unset",
                    paddingTop: "unset",
                  },
                  "& .css-13mhfsw-MuiGrid-root": {
                    marginTop: "0",
                  },
                }}
              >
                {tab.component}
              </Box>
            )
          );
        })}
      </Container>

      {/* post & comment */}
      {/* <Grid container>
        <Stack spacing={3} width={"100%"}>
          {user._id === profile._id && <PostForm />}

          <PostList userId={profile?._id} />
        </Stack>
      </Grid> */}
    </>
  );
}

export default BlogPage;

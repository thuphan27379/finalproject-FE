import React from "react";
import { Grid, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import GroupList from "./GroupList";
// import GroupInterest from "./GroupInterest";
import GroupSearch from "./GroupSearch";
import GroupForm from "./GroupForm";
import { createGroup } from "./groupSlice";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";

// UI for the group //GroupPage

// GroupSearch: SEARCH FOR GROUP
// GroupList: list of the group, pagination
// InterestList: interest list create by users, pagination

// GroupForm: create a new group

// postForm: if user login
// postCard: post of the group
// postsGroup: list of posts in the group // postList
// commentForm
// commentCard
// commentList
// reaction
function Group({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth

  //
  return (
    <>
      {/* 3 cards */}
      <Grid
        container
        spacing={3}
        width={"100%"}
        sx={{
          paddingTop: "0px", // work
          "& .css-4danns-MuiStack-root": { marginRight: "-24px" },
        }}
      >
        <Grid
          item
          xs={8}
          md={12}
          sx={{
            paddingTop: "0px", //?
            paddingBottom: "20px", //work
            paddingLeft: "unset", //?
            marginLeft: "-10px", //work
            paddingRight: "13px", //?
          }}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              "& .css-13mhfsw-MuiGrid-root, .css-1q7661i-MuiGrid-root": {
                maxWidth: "100%",
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-13mhfsw-MuiGrid-root > .MuiGrid-item": {
                paddingLeft: "0px",
                paddingTop: "0px",
              },
              "& .css-15yln57-MuiStack-root > :not(style) ~ :not(style)": {
                maxWidth: "30%",
              },
              paddingLeft: "0px",
              paddingTop: "0px",
            }}
          >
            {/* 20% search*/}
            <GroupSearch profile={profile} />
            {/* 40% with pagination*/}
            <GroupList profile={profile} />
            {/* 40% with pagination*/}
            {/* <GroupInterest profile={profile}  /> */}
          </Stack>
        </Grid>

        {/* GroupForm, create a new group */}
        <GroupForm width="100%" />

        {/* group name & interest show if clicked/joined */}
        <div>
          <p>Group name - Group Interest</p>
          <p>Members Count - Posts Count</p>
          <br />
        </div>

        {/* postList, comment, reaction */}
        <Grid container sx={{ paddingLeft: "15px" }}>
          <Stack spacing={2} width={"100%"}>
            {/* {user._id === profile?._id && <PostForm />} */}
            <PostForm userId={profile?._id} />
            <PostList userId={profile?._id} />
          </Stack>
        </Grid>
      </Grid>

      <div
        style={{
          paddingRight: "30px",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        Create, join, and post in groups based on interests or topics <br />
        1. Add a "Groups" collection to your MongoDB database to store group
        information such as group name, group description, group members, and
        group posts. <br />
        2. Create a form on your app where users can create a new group by
        providing a group name, group description, and selecting a category or
        interest that the group will be based on. <br />
        3. When a user creates a new group, add the group information to the
        "Groups" collection in MongoDB and make the creator of the group the
        first member. <br />
        4. Allow users to search for and join existing groups by browsing
        categories or interests, or by searching for a specific group name or
        keyword. <br />
        5. When a user requests to join a group, add their user ID to the "group
        members" field in the corresponding group document in MongoDB. <br />
        6. Implement a way for users to post in a group by creating a form where
        they can write a post and submit it to the corresponding group. <br />
        7. When a user posts in a group, add the post information to the "group
        posts" field in the corresponding group document in MongoDB. <br />
        8. Display the posts in a group on the group page for all group members
        to see. <br />
        9. Allow users to leave a group if they no longer want to be a member.
        <br />
        10. Ensure that only members of a group can post in the group, and that
        non-members cannot view the group posts.
      </div>
    </>
  );
}

export default Group;

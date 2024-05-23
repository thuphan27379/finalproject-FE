import React from "react";

function Group() {
  return (
    <div>
      Create, join, and post in groups based on interests or topics <br />
      1. Add a "Groups" collection to your MongoDB database to store group
      information such as group name, group description, group members, and
      group posts. <br />
      2. Create a form on your app where users can create a new group by
      providing a group name, group description, and selecting a category or
      interest that the group will be based on. <br />
      3. When a user creates a new group, add the group information to the
      "Groups" collection in MongoDB and make the creator of the group the first
      member. <br />
      4. Allow users to search for and join existing groups by browsing
      categories or interests, or by searching for a specific group name or
      keyword. <br />
      5. When a user requests to join a group, add their user ID to the "group
      members" field in the corresponding group document in MongoDB. <br />
      6. Implement a way for users to post in a group by creating a form where
      they can write a post and submit it to the corresponding group. <br />
      7. When a user posts in a group, add the post information to the "group
      posts" field in the corresponding group document in MongoDB. <br />
      8. Display the posts in a group on the group page for all group members to
      see. <br />
      9. Allow users to leave a group if they no longer want to be a member.{" "}
      <br />
      10. Ensure that only members of a group can post in the group, and that
      non-members cannot view the group posts.
    </div>
  );
}

export default Group;

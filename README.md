| Documentation |
Project description - a brief description of the purpose and main features
User Story
Instructions on how to set up and run the application locally
Third-party libraries used in the project

---

\*The Project Title: MyCompany WebApp - Social Platform

\*The Project Description:

- [] All about my company: my cooperator and customer can know everything what my company do.
- [] Startup community - social networking: opportunity for young startup and SMEs.

\*User Story:

\*\*Background:

- [] MyCompany is webapp of organization about IT solution and startup. Client can get information, search and contact us.
- [] It is also a blog that allows people to join and create their profile, following/ follower and others.

\*\*\*Social Platform:

User story:

- [] Site - Home:  
  Get all information of company.

- [] Startup Community-blog:
  Create profile, make friend, share post and comment, join group.

### Authentication:

- [] As a user, I am able to log in and log out my account with email and password after register a new account.

### User:

- [] As a user, I am able to create my account by providing basic information.
- [] As a user, I am able to get list of users with pagination for add friend.
- [] As a user, I am able to see a specific user's profile given a user ID.
- [] As a user, I am able to get all my profile info.
- [] As a user, I am able to update my profile

Post:

- [] As a user, I am able to share my thoughts and interests by creating content (text, images, or video).
- [] As a user, I am able to get comments of a post.
- [] As a user, I am able to get detail a single post.
- [] As a user, I am able to edit and delete my posts.
- [] As a user, I am able to view my own posts as well as other users content.

Comment:

- [] As a user, I am able to get a list of comments of a post.
- [] As a user, I am able to interact with content by commenting.
- [] As a user, I am able to edit or delete comments that I created.

Friend/follow:

- [] As a user, I am able to get the list of received pending requests.
- [] As a user, I am able to get the list of sent pending requests.
- [] As a user, I am able to see a list of people that I follow as well as my followers.
- [] As a user, I am able to send a friend request to others.
- [] As a user, I am able to accept/decline a friend request from others.
- [] As a user, I am able to cancel a friend request that I sent.
- [] As a user, I am able to remove a friend.

Reaction:

- [] As a user, I am able to create a like/dislike on posts OR comments.

Group:

- [] As a user, I am able to create a new group by providing a group name, group description, and selecting a category or interest that the group will be based on.
- [] As a user, I am able to search for and join groups by browsing categories or interests, or by searching for a specific group name or keyword.
- [] As a group member, I am able to post in a group.
- [] As a group member, I am able to comment and reaction on a post in the group.
- [] As a group member, I am able to see the posts in a group on the group page.
- [] As a group member, I am able to join existing group.
- [] As a group member, I am able to leave a group.

\*API endpoints:

Site APIs:

- @route GET /
- @description information of company
- @body
- @access Public

Auth APIs:

- @route POST /auth/login
- @description user log in with username and password
- @body {email, passsword}
- @access Public

User APIs:

- @route GET /users/page=1?&limit=10
- @description Get list of users with pagination
- @body
- @access Login required

- @route GET /users/me
- @description Get current user info
- @body
- @access Login required

- @route GET /users/:id
- @description Get user detail info by Id
- @body
- @access Login required

- @route POST /users
- @description Register new user
- @body {name, email, password}
- @access Public

- @route PUT /users/:id
- @description Update user profile
- @body {name, avatar, aboutMe, city, country, company, fbLink, instagramLink, linkedInLink, twitterLink, youtubeLink}
- @access Login required

Post APIs:

- @route GET /posts/user/userId?page=1&limit=10
- @description Get all posts a user can see with pagination
- @body
- @access Login required

- @route GET /posts/:id/comments
- @description Get comments of a post
- @body
- @access Login required

- @route GET /posts/:id
- @description Get a single post
- @body
- @access Login required

- @route POST /posts
- @description Create a new post
- @body {content, image}
- @access Login required

- @route PUT /posts/:id
- @description Update a post
- @body {content, image}
- @access Login required

- @route DELETE /posts/:id
- @description Delete a post
- @body
- @access Login required

Comment APIs:

- @route GET /comments/:id
- @description Get details of a comment
- @body
- @access Login required

- @route POST /comments
- @description Create a new comment
- @body {content, postId}
- @access Login required

- @route PUT /comment/:id
- @description Update a comment
- @body
- @access Login required

- @route DELETE comments/:id
- @description Delete a comment
- @body
- @access Login required

Friend APIs:

- @route GET /friends/requests/incoming
- @description Get the list of received pending requests
- @body
- @access Login required

- @route GET /friends/requests/outgoing
- @description Get the list of sent pending requests
- @body
- @access Login required

- @route GET /friends/
- @description Get the list of friends
- @body
- @access Login required

- @route POST /friends/requests
- @description Send a friend request
- @body {to: User ID}
- @access Login required

- @route PUT /friends/requests/:userId
- @description Accept/Reject a received pending requests
- @body {status: 'accepted' or 'declined'}
- @access Login required

- @route DELETE /friends/requests/:userId
- @description cancel a friend request
- @body
- @access Login required

- @route DELETE /friends/:userId
- @description remove a friend
- @body
- @access Login required

Reaction APIs: posts OR comments

- @route POST /reactions
- @description Create a like/dislike
- @body ["like", "dislike"]
- @access Login required

Group:

- @route POST/group
- @description create a new group
- @body (userId, name, description, categories, interests..)
- @access login required

- @route GET/group
- @description get list of group & interest & search
- @body (userId, groupId, name, categories, interests)
- @access login required

- @route PUT/group
- @description join a group
- @body (userId, groupId)
- @access login required

- @route DELETE/group
- @description leave a group
- @body (userId, groupId)
- @access login required

- @route GET/group
- @description get single group
- @body (groupId)
- @access login required

- @route POST/group/posts
- @description create a new post in the group
- @body (userId, groupId, content)
- @access login required

- @route GET/group/posts
- @description get list of posts in group
- @body (userId, groupId, postId)
- @access login required

\* Diagram Relation:

User:
name: String, required
email: String, required
password: String, required
avatarUrl: String
aboutMe: String
city: String
country: String
company: String
jobTitle: String
facebookLink: String
instagramLink: String
linkedinLink: String
twitterLink: String
isDeleted: Boolean
friendCount: Number
postCount: Number

Post:
content: String, required
image: String
author: Schema.Types.ObjectId, required
isDeleted: Boolean
commentCount: Number
reactions: enum: ["like", "dislike"]
like: Number
dislike: Number

Comment:
content: String, required
author: Schema.ObjectId, required
post: Schema.ObjectId, required
reactions: enum: ["like", "dislike"]
like: Number
dislike: Number

Friend:
from: Schema.ObjectId, required
to: Schema.ObjectId, required
status: String, enum: ["pending", "accepted", "declared"]

Reaction:
author: Schema.ObjectId, required,
targetType: String, required, enum: ["Post", "Comment"]
targetId: Schema.ObjectId, required
emoji: String, required, enum: ["like", "dislike"]

Group:
creator: Schema.Types.ObjectId, required
name: String, required
description: String, required
interests: String, required
members: Schema.Types.ObjectId
postsByGroupId: Schema.Types.ObjectId,
postGroupCount: Number
isDeleted: Boolean

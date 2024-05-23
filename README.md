| Documentation |
? Project description - a brief description of the purpose and main features
? User Story
? Instructions on�how to set up and run the application locally
? Third-party libraries used in the project

---

\*The Project Title: MyCompany WebApp - Social Platform

\*The Project Description:
All about my company: my cooperator and customer can know everything what my company do.
Startup community - social networking: opportunity for young startup and SMEs.

\*User Story:

\*\*Background:
MyCompany is webapp of organization about IT solution and startup. Client can get information, search and contact us...
It is also a blog that allows people to join and create their profile, following/ follower and others... (free email@domain.com, domain.com/accountname).

Admin app (database and account management and more). admin.domain.com

\*\*\*Social Platform:

User story:

Site - Home:  
Get all information of company. (about us, startup, domains, projects...)

Startup Community-blog:

Authentication:  
As a user, I am able to log in and log out my account. (stay signed in after refreshing the page.) x
\*\*\*Forget & Reset Password

User:
As a user, I am able to create my account by providing basic information (name, email, password...). signup x
(Passwords must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.)
As a user, I am able to get list of users with pagination for add friend. x
As a user, I am able to see a specific user's profile given a user ID. (search by name/id) x
As a user, I am able to get all my profile info.
As a user, I am able to update my profile (name, avatar, bio, information, image,...). x
As a user, I am able to receive notifications about new likes, and comments on my content, as well as new followers and other relevant events.
\*\*\*Simple Chat between users

Post:
As a user, I am able to share my thoughts and interests by creating content (text, images, or video). x
As a user, I am able to get comments of a post. x
As a user, I am able to get detail a single post.(with comments, reaction)
As a user, I am able to edit and delete my posts. x
As a user, I am able to view my own posts as well as other users content (wall). x
\*\*\*Tag other users in posts and comments

Comment:
As a user, I am able to get a list of comments of a post. x
As a user, I am able to interact with content by commenting.
As a user, I am able to edit or delete comments that I created. x
\*\*\*Tag other users in posts and comments

Friend/follow:
As a user, I am able to get the list of received pending requests - incoming list. x
As a user, I am able to get the list of sent pending requests - outgoing list. x
As a user, I am able to see a list of people that I follow as well as my followers. (my friend list) x
As a user, I am able to send a friend request to others - add friend other users - outgoing sent request. x
As a user, I am able to accept/decline a friend request from others - incoming receive request. x
As a user, I am able to cancel a friend request that I sent. x
As a user, I am able to remove (unfriend) a friend. x

Reaction:
As a user, I am able to create a like/dislike on posts OR comments.

Group:
As a user, I am able to create a new group by providing a group name, group description, and selecting a category or interest that the group will be based on.
As a user, I am able to search for and join existing groups by browsing categories or interests, or by searching for a specific group name or keyword. group list
As a group member, I am able to post in a group.
As a group member, I am able to comment and reaction on a post in the group.
As a group member, I am able to see the posts in a group on the group page. post list
As a group member, I am able to leave a group.

Admin app - dashboard: (admin.domain.com)
*Database&Content management: (domains lists,...)
-edit menu
-update content, media
-add/replace banner ads
*Authorization-User Management:
-accounts management
-approve/ profile
*Hosting & domains:
*Security:
*Digital marketing: SEO,...
*Client feedback: contact
\*Task Management: codermanagement, minimal template x
...

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
- @description Get current user info (my profile)
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
- @body {name, avatar, cover, aboutMe, city, country, company, jobtitle, fbLink, instagramLink, linkedInLink, twitterLink}
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

Group ?

\* Diagram Relation: model-schema

User:
name: String, required
email: String, required
password: String, required
avatarUrl: String
coverUrl: String
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
author: Schema.Types.ObjectId, required, ref: "User"
isDeleted: Boolean
commentCount: Number
reactions:
like: Number
dislike: Number

Comment:
content: String, required
author: Schema.ObjectId, required, ref: "User"
post: Schema.ObjectId, required, ref: "Blog"
reactions:
like: Number
dislike: Number

Friend:
from: Schema.ObjectId, required, ref: "User"
to: Schema.ObjectId, required, ref: "User"
status: String, enum: ["pending", "accepted", "declared"]

Reaction:
author: Schema.ObjectId, required, ref: "User"
targetType: String, required, enum: ["Post", "Comment"]
targetId: Schema.ObjectId, required, refPath: "targetType"
emoji: String, required, enum: ["like", "dislike"]

Group:
name: String, required
description: String, required
members: (users ID)
posts: (post by member)
comment:
reaction:
categories: String, required, enum: ["", ""]
interests: String, required, enum: ["", ""]

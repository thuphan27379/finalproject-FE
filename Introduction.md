## General Requirements

### **1. Back-end requirements**

| RESTful API |
• Design reasonable schemas and ERD (Entity Relationship Diagram)
• Design and implement a RESTful API with appropriately named routes
• Responses from the server must have a uniform structure
• Implement soft delete with isDeleted for user data.
• Validate all request inputs.

| Authentication |
• Implement user authentication using JSON Web Tokens (JWTs) or another secure authentication method, such as OAuth
• Password must be encrypted.

| Documentation |
• Include a README file with:
? Instructions on how to set up and run the API locally
? API documentation on how to consume the API (ex: description and instruction for each route)
? ERD

### **2. Front-end requirements**

| User Interface |
• The application must have a responsive design that looks good on least 3 screen sizes: desktop, tablet, and mobile.
• Theme changing feature (eg: Dark/Light mode).
• Use Material UI. Customizing the MUI components with CSS is allowed.

| --- | --- |
| User Authentication |
• Implement persistent login.

| Form Validation |
• The project should implement client-side form validation to ensure that user input is valid before submitting it to the server.

| Error Handling |
• Implement error handling on the front-end to display error messages to users when something goes wrong on the server.

| Routing |
• Use React Router to handle client-side routing and allow users to navigate between pages without a full page refresh.
• Each view must have its dedicated url path so that it is possible to share the current view by url between users. (Only required for non-protected routes).
• Protected routes for pages where applicable.
• The deployed version on Netlify must be able to navigate to pages by editing the url input box on the browser or hitting refresh button instead of showing 404 error. Hint: https://docs.netlify.com/routing/redirects/

| Documentation |
• Include a README file with:
? Project description - a brief description of the purpose and main features
? User Story
? Instructions on how to set up and run the application locally
? Third-party libraries used in the project

## **Deliverables**

You are expected to submit a minimum of the following

| Item                                   | Notes                                                |
| -------------------------------------- | ---------------------------------------------------- |
| Github link to Front-end code base     | Include README as instructed in FE requirements      |
| Github Link Back-end code base         | Include README as instructed in BE requirements      |
| Links to deployed application & server | Netlify & Heroku (or other platforms as appropriate) |

## ? Let’s Choose Your Product

Have a look at the Product Gallery below, choose one that speaks to you and follow the instruction on the product page

[Final Project: Product Gallery ](https://www.notion.so/Final-Project-Product-Gallery-49b603a5e75b470193b5435245756621?pvs=21)

## **Description**

Our company is developing a social platform app for users to connect and share content with each other. The app will include a range of features and functional requirements to allow users to create and manage their profiles, search for and follow other users, and post and interact with content.

## **User Stories**

| User Roles | Stories for each user role                                      |
| ---------- | --------------------------------------------------------------- |
| User       | 1. As a user, I want to be able to sign up to create my profile |

2. As a user, I want to be able to log in (log out) of my account
3. As a user, I want to be able to manage my profile by adding personal information, profile picture, and interests.
4. As a user, I want to be able to search for and follow/unfollow other users
5. As a user, I want to be able to accept/deny following requests from other users.
6. As a user, I want to be able to see a list of people that I follow as well as my followers
7. As a user, I want to be able to share my thoughts and interests by creating content
8. As a user, I want to be able to view my own posts as well as other users’ content
9. As a user, I want to be able to interact with content by liking, reacting, commenting, and sharing.
10. As a user, I want to be able to edit or delete content, comments, shares or likes that I created.
11. As a user, I want to be able to receive notifications about new likes, shares, and comments on my content, as well as new followers and other relevant events.
12. As a user, I want to be able to save the content so that I can access them later.

## Features and Specifications

| Feature             | Specification                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------- |
| User Authentication | - Users can sign up for an account by providing basic information (name, email, password) |

- Users can log in and log out of their accounts.
- Passwords must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.
- Use encryption to securely store user passwords and other sensitive information.

  | User Profile Management |

  - Users can edit their profile information (name, profile picture, bio, interests) at any time.

- Users can view their own profile as well as the profiles of other users.
- Users can follow/unfollow other users
- Users can accept/deny following requests.
- Users can view a list of people they follow as well as their followers.

  | Post Creation and Interaction |

  - Users can create posts that consist of text, images, or video.

- Users can view their own posts as well as other users' posts.
- Users can like, react, comment, and share posts.
- Users can edit or delete posts, comments, shares, or likes that they created.

  | Notification System |

  - Users receive notifications for new likes, shares, and comments on their posts, as well as new followers.

- Users can view their notification history.

  | Post Bookmarking |

  - Users can save posts to a bookmarks list for later viewing.

- Users can remove posts from their bookmarks list.

## **Schema & ERD Suggestion**

### Common schemas

1. Users: This schema includes user information such as name, email, password, profile picture, and interests.
2. Posts: This schema includes post information such as post content, creation date, and the user who created the post.
3. Comments: This schema includes comment information such as comment content, creation date, and the user who created the comment.
4. Likes: This schema includes like information such as creation date, the user who created the like, and the post that was liked.
5. ??? Shares: This schema includes share information such as creation date, the user who created the share, and the post that was shared.
6. Followers/Following: This schema includes information on which users follow each other.

Your schemas may be different depending on your business logic. You may also need more schemas or more properties .

### **Questions to Ask Before Designing the ERD**

By answering these questions and understanding the relationships between entities, developers can design an ERD that accurately represents the data requirements for the marketplace web app. The ERD must ensure data consistency, integrity, and performance, and the relationships between entities will significantly impact the code written to interact with the database.

1. **What are the entities in the system?**
   Entities are the objects or concepts that are relevant to the system. For example, in a social media platform, the entities might include users, posts, comments, likes, and followers.
2. **What are the relationships between the entities?**
   Relationships describe how the entities in the system are connected to each other. For example, in a social media platform, a user can create a post, a post can have multiple comments, and a user can follow other users.
3. **What attributes are associated with each entity?**
   Attributes are the characteristics or properties of each entity. For example, a user entity might have attributes such as username, email address, and profile picture.
4. **What are the cardinalities of the relationships between entities?**
   Cardinalities describe the number of instances of one entity that can be associated with another entity. For example, a user can create multiple posts, but a post can only be created by one user.
5. **What are the constraints or business rules that apply to the entities and relationships?**
   Constraints are the rules that govern the behavior of the system. For example, in a social media platform, a user cannot follow themselves, and a post must have a minimum length of characters.

## Elective Features

You can choose up to 3 elective features from the list below to make your app cooler, but **feel free to come up with your own feature as well**. If you decide to do so, make sure to discuss it with your mentor and have a clear plan on how to implement it.

[Untitled Database](https://www.notion.so/c1bb4747653e4118ac6f47901f393854?pvs=21)

1.  ?? Features with a _blank page_ icon, like **_Forget & Reset Password,_** are simple enough that we encourage you to come up with the solution yourself.

2.  Features with _2 lines_ in the icon, like **_Simple Chat between users,_** are the more challenging ones that include suggestion on how to approach them. You can click on those page to see more.

https://firebase.google.com/
https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/

3.

# [Elective] Create, join, and post in groups based on interests or topics

1. Add a "Groups" collection to your MongoDB database to store group information such as group name, group description, group members, and group posts.
2. Create a form on your app where users can create a new group by providing a group name, group description, and selecting a category or interest that the group will be based on.
3. When a user creates a new group, add the group information to the "Groups" collection in MongoDB and make the creator of the group the first member.
4. Allow users to search for and join existing groups by browsing categories or interests, or by searching for a specific group name or keyword.
5. When a user requests to join a group, add their user ID to the "group members" field in the corresponding group document in MongoDB.
6. Implement a way for users to post in a group by creating a form where they can write a post and submit it to the corresponding group.
7. When a user posts in a group, add the post information to the "group posts" field in the corresponding group document in MongoDB.
8. Display the posts in a group on the group page for all group members to see.
9. Allow users to leave a group if they no longer want to be a member.
10. Ensure that only members of a group can post in the group, and that non-members cannot view the group posts.

11. Tag other users in posts and comments

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import apiService from "../../app/apiService";
import { GROUP_PER_PAGE, POSTS_PER_PAGE } from "../../app/config";
import { cloudinaryUpload } from "../../utils/cloudinary";
import { getCurrentUserProfile } from "../user/userSlice";

// for group
// init value
const initialState = {
  isLoading: false,
  error: null,
  list: [], // list group name
  currentList: [], // group list currentPage
  totalGroups: 1, // pagination
  groupPostsList: [], // /group/:groupId
  currentPagePostsByGroup: [],
  totalPostsGroup: 1,
};

// createSlice() all the slices
const slice = createSlice({
  name: "group",
  initialState,
  reducers: {
    // create all type of actions
    startLoading(state) {
      state.isLoading = true;
    },
    //
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // declare all posts are empty before getPosts
    resetPosts(state, action) {
      state.postsById = {};
      state.currentPagePosts = [];
    },

    // create a new group
    createGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      // console.log(action.payload);
      state.list.unshift(action.payload.newGroup); //bo object vao trong array
    },

    // getListSuccess (list of group name & interests)
    getListSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      //group list, interest list
      state.list = action.payload.groups;
      state.interests = action.payload.interests;

      // get total group
      const { groups, totalPage } = action.payload;
      // console.log(action.payload);

      state.totalGroups = action.payload.totalGroups;
    },

    // join a group
    joinGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const newMember = action.payload.currentUserId;

      // console.log(action.payload);
      state.newMember = action.payload.members;
    },

    // leave a group
    leaveGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { currentUserId, members } = action.payload;
      // console.log(action.payload);

      state.members = members; // Update state members
      state.memberLeave = currentUserId; // Store user who left
    },

    // getSingleGroup
    getSingleGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { singleGroup } = action.payload;
      // console.log(singleGroup);

      state.singleGroup = singleGroup;
      state.name = action.payload.singleGroup;
      state.interests = action.payload.singleGroup;
    },

    // getSearchGroup
    getSearchGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { groups } = action.payload;
      state.searchGroupResult = groups; //searchGroupResult
    },

    // create a new post in the group
    createPostGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const newPostGroup = action.payload;
      const currentGroupId = action.payload;

      // if (state.currentPagePosts.length % POSTS_PER_PAGE === 0)
      //   state.currentPagePosts.pop();
      // xoa bot post list truoc de list new post
      state.currentGroupId = newPostGroup;
      // state.currentPagePosts.unshift(newPostGroup._id);
    },

    // get all posts in the group /group/:groupId
    getPostsGroupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      // groupPostsList from backend??
      // console.log(action.payload);
      const { groupPostsList, count, groupId } = action.payload;
      // console.log("post by group", groupPostsList);

      state.groupPostsList = groupPostsList.postsByGroupId;
      // loc cac bai post sao cho khong trung lap
      // groupPostsList.forEach((post) => {
      //   state.postsById[post._id] = post;
      //   if (!state.currentPagePostsByGroup.includes(post._id))
      //     state.currentPagePostsByGroup.push(post._id);
      // });
      state.totalPostsGroup = count;
    },

    // delete a post
    // deletePostSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;

    //   const { postId } = action.payload;

    //   // Remove the deleted post from the state
    //   delete state.postsById[postId];

    //   // Remove the postId from currentPagePosts array
    //   state.currentPagePosts = state.currentPagePosts.filter(
    //     (id) => id !== postId
    //   );
    // },

    // edit a post & image
    // editPostSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;

    //   // Check if the edited post data is available in the response
    //   // if (action.payload.success && action.payload.data) {
    //   const editedPost = action.payload;
    //   // console.log(editedPost);

    //   // Find the index of the edited post in currentPagePosts
    //   const editedPostIndex = state.currentPagePosts.indexOf(editedPost._id);

    //   // Check if the edited post has a new image URL //
    //   const newImage = editedPost.image
    //     ? editedPost.image
    //     : state.postsById[editedPost._id].image;

    //   // Update the post's content and image URL //
    //   state.postsById[editedPost._id] = {
    //     ...state.postsById[editedPost._id],
    //     content: editedPost.content,
    //     image: newImage,
    //   };

    //   // If the edited post is in the current page posts, update it
    //   if (editedPostIndex !== -1) {
    //     state.currentPagePosts[editedPostIndex] = editedPost._id;
    //     // }
    //   }
    //   // state.postsById[editedPost._id] = editedPost;
    // },

    // reaction a post
    // sendPostReactionSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;

    //   const { postId, reactions } = action.payload;
    //   state.postsById[postId].reactions = reactions;
    // },
  },
});

export default slice.reducer;

// functions //
// create a new group
export const createGroup =
  ({ name, description, interests }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      // upload image to cloudinary.com - from PostForm.js
      const response = await apiService.post("/group", {
        name,
        description,
        interests,
      });

      dispatch(slice.actions.createGroupSuccess(response.data));
      toast.success("Create Group successfully");
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// get list of group name, interest
export const getList =
  ({ page = 1, limit = GROUP_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = { page, limit };
      const response = await apiService.get(`/group/groupList`, {
        params,
      });
      dispatch(slice.actions.getListSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// join a group
export const joinGroup =
  ({ currentGroupId, currentUserId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await apiService.put(
        `/group/${currentGroupId}/${currentUserId}`
      );

      dispatch(slice.actions.joinGroupSuccess(response.data));
      toast.success("Join Group successfully");
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// leave a group
export const leaveGroup =
  (
    { currentGroupId, currentUserId } //
  ) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await apiService.delete(
        `/group/${currentGroupId}` // ${currentUserId}
      );
      // dispatch(
      //   slice.actions.leaveGroupSuccess({
      //     currentUserId,
      //     members: response.data.leaveGroup.members,
      //   })
      // );
      dispatch(slice.actions.leaveGroupSuccess(response.data));
      toast.success("Leave Group successfully");
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// show group info after join
// getSingleGroup
export const getSingleGroup = (groupId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.get(`/group/${groupId}`);
    dispatch(slice.actions.getSingleGroupSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// create a new post in the group
export const createPostGroup =
  ({ content, image, groupId, fromGroup }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      // upload image to cloudinary.com - from GroupPostForm.js
      const params = {};
      const imageUrl = await cloudinaryUpload(image);
      const response = await apiService.post(`/group/${groupId}/posts`, {
        content,
        image: imageUrl,
        fromGroup,
      });

      dispatch(slice.actions.createPostGroupSuccess(response.data));
      toast.success("Post in the group successfully");
      // dispatch(getCurrentUserProfile()); //?
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// getSearchGroup: search by name
export const getSearchGroup =
  ({ filterGroup, groupId, page = 1, limit = GROUP_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = { page, limit };
      if (filterGroup) params.name = filterGroup;
      const response = await apiService.get("/group/groupList", {
        params,
      });
      dispatch(slice.actions.getSearchGroupSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      // toast.error(error.message);
    }
  };

// get all posts of the group
// if post from group & by groupId (postsByGroupId)
// fromGroup is true
// /group/:groupId
export const getPostsGroup =
  ({ groupId, page = 1, limit = POSTS_PER_PAGE }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = { page, limit };

      // ?? get post by groupId OR lay postsByGroupId ra
      const response = await apiService.get(`/group/${groupId}/posts`, {
        params,
        fromGroup: true,
      });
      console.log("group post", response);

      if (page === 1) dispatch(slice.actions.resetPosts()); //reset posts before dispatch and show only posts of this currentUser
      dispatch(slice.actions.getPostsGroupSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

// get all post of groupId!!!
// blog

// comment

// delete a post in the group
// confirm delete
// export const deletePost =
//   ({ postId }) =>
//   async (dispatch) => {
//     // Show confirmation pop-up
//     const isConfirmed = window.confirm(
//       "Are you sure you want to delete this post?"
//     );
//     if (!isConfirmed) {
//       // If user cancels the deletion, do nothing
//       return;
//     }

//     dispatch(slice.actions.startLoading());
//     try {
//       // Correct the endpoint to delete a post
//       await apiService.delete(`/posts/${postId}`);
//       dispatch(slice.actions.deletePostSuccess({ postId }));

//       // Show success notification
//       toast.success("Post deleted successfully");
//     } catch (error) {
//       dispatch(slice.actions.hasError(error.message));
//       toast.error(error.message);
//     }
//   };

// edit a post in the group
// edit a image in the post ??
// export const editPost =
//   ({ postId, content, image }) =>
//   async (dispatch) => {
//     dispatch(slice.actions.startLoading());

//     try {
//       // upload image to cloudinary.com - from PostForm.js
//       const imageUrl = await cloudinaryUpload(image);
//       const response = await apiService.put(`/posts/${postId}`, {
//         content,
//         image: imageUrl,
//       });

//       // Log the entire response
//       // console.log("Edit Post Response:", response);

//       dispatch(slice.actions.editPostSuccess(response.data));
//       // console.log(response.data);

//       dispatch(getPostsGroup({ userId: response.data.author }));
//       toast.success("Post edited successfully");
//     } catch (error) {
//       dispatch(slice.actions.hasError(error.message));
//       toast.error(error.message);
//     }
//   };

// reaction on the post in the group
// export const sendPostReaction =
//   ({ postId, emoji }) =>
//   async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     // console.log(postId);
//     // console.log(emoji);

//     try {
//       const response = await apiService.post(`/reactions`, {
//         targetType: "Post",
//         targetId: postId,
//         emoji,
//       });
//       dispatch(
//         slice.actions.sendPostReactionSuccess({
//           postId,
//           reactions: response.data,
//         })
//       );
//     } catch (error) {
//       dispatch(slice.actions.hasError(error.message));
//       toast.error(error.message);
//     }
//   };

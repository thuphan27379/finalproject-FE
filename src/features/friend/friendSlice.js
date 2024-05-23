import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import apiService from "../../app/apiService";

// gia tri khoi tao
const initialState = {
  isLoading: false,
  error: null,
  currentPageUsers: [],
  usersById: {},
  totalPages: 1,
  outgoingRequests: [],
};

// states //
// function createSlice
const slice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    //start Loading
    startLoading(state) {
      state.isLoading = true;
    },
    //has Error
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //get Users Success
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { users, count, totalPages } = action.payload;
      users.forEach((user) => (state.usersById[user._id] = user));
      state.currentPageUsers = users.map((user) => user._id);
      state.totalUsers = count;
      state.totalPages = totalPages;
    },
    //get Friends Success
    getFriendsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { users, count, totalPages } = action.payload;
      users.forEach((user) => (state.usersById[user._id] = user));
      state.currentPageUsers = users.map((user) => user._id);
      state.totalUsers = count;
      state.totalPages = totalPages;
    },
    //get Friend Requests Success
    getFriendRequestsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { users, count, totalPages } = action.payload;
      users.forEach((user) => (state.usersById[user._id] = user));
      state.currentPageUsers = users.map((user) => user._id);
      state.totalUsers = count;
      state.totalPages = totalPages;
    },
    //send Friend Request Success
    sendFriendRequestSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { targetUserId, ...friendship } = action.payload;
      state.usersById[targetUserId].friendship = friendship;
    },
    //decline Request Success
    declineRequestSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { targetUserId, ...friendship } = action.payload;
      state.usersById[targetUserId].friendship = friendship;
    },
    //accept Request Success
    acceptRequestSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { targetUserId, ...friendship } = action.payload;
      state.usersById[targetUserId].friendship = friendship;
    },
    //cancel Request Success////////////////////
    cancelRequestSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { targetUserId } = action.payload;
      state.usersById[targetUserId].friendship = null;
    },
    //remove Friend Success
    removeFriendSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      const { targetUserId } = action.payload;
      state.usersById[targetUserId].friendship = null;
    },
    //sent friend request, outgoing///////////////////////
    getOutgoingSentsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;

      console.log(action.payload);
      state.outgoingRequests = action.payload.users;
    },
  },
});

export default slice.reducer;

// actions //
// function getUsers, for export to AddFriend.js
// startLoading & startLoading
export const getUsers =
  ({ filterName, page = 1, limit = 12 }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const params = { page, limit };
      if (filterName) params.name = filterName;
      const response = await apiService.get("/users", { params });
      dispatch(slice.actions.getUsersSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.message); //react toastify
    }
  };

// function getFriends, for export to AddFriend.js
// getFriendsSuccess
export const getFriends =
  ({ filterName, page = 1, limit = 12 }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = { page, limit };
      if (filterName) params.name = filterName;
      const response = await apiService.get("/friends", { params });
      dispatch(slice.actions.getFriendsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message); //react toastify
    }
  };

// function getFriendRequests, for export to AddFriend.js
// getFriendRequestsSuccess
export const getFriendRequests =
  ({ filterName, page = 1, limit = 12 }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = { page, limit };
      if (filterName) params.name = filterName;
      const response = await apiService.get("/friends/requests/incoming", {
        params,
      });
      dispatch(slice.actions.getFriendRequestsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message); //react toastify
    }
  };

// function send Friend Request
// sendFriendRequestSuccess
export const sendFriendRequest = (targetUserId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.post(`/friends/requests`, {
      to: targetUserId,
    });
    dispatch(
      slice.actions.sendFriendRequestSuccess({ ...response.data, targetUserId })
    );
    toast.success("Request sent"); //react toastify
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// function decline Request, for export to AddFriend.js
// declineRequestSuccess
export const declineRequest = (targetUserId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.put(`/friends/requests/${targetUserId}`, {
      status: "declined",
    });
    dispatch(
      slice.actions.declineRequestSuccess({ ...response.data, targetUserId })
    );
    toast.success("Request declined"); //react toastify
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// function accept Request, for export to AddFriend.js
// acceptRequestSuccess
export const acceptRequest = (targetUserId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.put(`/friends/requests/${targetUserId}`, {
      status: "accepted",
    });
    dispatch(
      slice.actions.acceptRequestSuccess({ ...response.data, targetUserId })
    );
    toast.success("Request accepted"); //react toastify
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// function cancel Request, for export to AddFriend.js
// cancelRequestSuccess
export const cancelRequest = (targetUserId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.delete(
      `/friends/requests/${targetUserId}`
    );
    dispatch(
      slice.actions.cancelRequestSuccess({ ...response.data, targetUserId })
    );
    toast.success("Request cancelled"); //react toastify
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// function removeFriend, for export to AddFriend.js
// removeFriendSuccess
export const removeFriend = (targetUserId) => async (dispatch) => {
  dispatch(slice.actions.startLoading());

  try {
    const response = await apiService.delete(`/friends/${targetUserId}`);
    dispatch(
      slice.actions.removeFriendSuccess({ ...response.data, targetUserId })
    );
    toast.success("Friend removed"); //react toastify
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};

// getOutgoingSents
// getOutgoingSentsSuccess
export const getOutgoingSents =
  ({ filterName, page = 1, limit = 12 }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = { page, limit };
      const response = await apiService.get("/friends/requests/outgoing", {
        params,
      });
      console.log(response);
      dispatch(slice.actions.getOutgoingSentsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message); //react toastify
    }
  };

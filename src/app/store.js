import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";
import commentReducer from "../features/comment/commentSlice";
import friendReducer from "../features/friend/friendSlice";
import groupReducer from "../features/group/groupSlice";
import homeReducer from "../features/home/homeSlice"; //

//
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
  friend: friendReducer,
  group: groupReducer,
  home: homeReducer, //
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

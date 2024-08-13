import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { sendPostReaction } from "./postSlice";

//
function PostReaction({ post }) {
  const dispatch = useDispatch();

  // reaction clicked
  const userReactions = useSelector((state) => state.post.userReactions || {});
  const userReaction = userReactions[post._id];

  const hasLiked = userReaction === "like";
  const hasDisliked = userReaction === "dislike";

  // click
  const handleClick = (emoji) => {
    dispatch(sendPostReaction({ postId: post._id, emoji }));
  };

  // unclick: unlike and undislike!

  //
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        {/* LIKE */}
        <IconButton onClick={() => handleClick("like")}>
          {hasLiked ? (
            <ThumbUpAltIcon sx={{ fontSize: 18, color: "secondary.main" }} />
          ) : (
            <ThumbUpAltOutlinedIcon
              sx={{ fontSize: 18, color: "secondary.main" }}
            />
          )}
        </IconButton>
        <Typography variant="h7" mr={1}>
          {post?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton onClick={() => handleClick("dislike")}>
          {hasDisliked ? (
            <ThumbDownAltIcon sx={{ fontSize: 18, color: "error.main" }} />
          ) : (
            <ThumbDownAltOutlinedIcon
              sx={{ fontSize: 18, color: "error.main" }}
            />
          )}
        </IconButton>
        <Typography variant="h7">{post?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default PostReaction;

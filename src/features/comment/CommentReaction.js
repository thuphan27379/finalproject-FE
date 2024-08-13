import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { sendCommentReaction } from "./commentSlice";

//
function CommentReaction({ comment }) {
  const dispatch = useDispatch();

  // reaction clicked
  const userReactions = useSelector(
    (state) => state.comment.userReactions || {}
  );

  const userReaction = userReactions[comment._id];

  const hasLiked = userReaction === "like";
  const hasDisliked = userReaction === "dislike";

  // click
  const handleClick = (emoji) => {
    dispatch(sendCommentReaction({ commentId: comment._id, emoji }));
  };

  // unclick: unlike and undislike

  //
  return (
    <>
      <Stack direction="row" alignItems="center">
        {/* LIKE */}
        <IconButton
          onClick={() => handleClick("like")}
          sx={{ color: "secondary.main" }}
        >
          {hasLiked ? (
            <ThumbUpAltIcon sx={{ fontSize: 18 }} />
          ) : (
            <ThumbUpAltOutlinedIcon
              sx={{ fontSize: 18, color: "secondary.main" }}
            />
          )}
        </IconButton>
        <Typography variant="h7" mr={1}>
          {comment?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton
          onClick={() => handleClick("dislike")}
          sx={{ color: "error.main" }}
        >
          {hasDisliked ? (
            <ThumbDownAltIcon sx={{ fontSize: 18 }} />
          ) : (
            <ThumbDownAltOutlinedIcon
              sx={{ fontSize: 18, color: "error.main" }}
            />
          )}
        </IconButton>
        <Typography variant="h7">{comment?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default CommentReaction;

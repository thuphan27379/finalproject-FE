import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { sendCommentReaction } from "./commentSlice";

//
function CommentReaction({ comment }) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendCommentReaction({ commentId: comment._id, emoji }));
  };

  // if current user is like => icon is Filled !!!
  return (
    <>
      <Stack direction="row" alignItems="center">
        {/* LIKE */}
        <IconButton
          onClick={() => handleClick("like")}
          sx={{ color: "secondary.main" }}
        >
          <ThumbUpAltOutlinedIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Typography variant="h7" mr={1}>
          {comment?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton
          onClick={() => handleClick("dislike")}
          sx={{ color: "error.main" }}
        >
          <ThumbDownAltOutlinedIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Typography variant="h7">{comment?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default CommentReaction;

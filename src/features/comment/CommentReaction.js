import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

import { sendCommentReaction } from "./commentSlice";

//
function CommentReaction({ comment }) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendCommentReaction({ commentId: comment._id, emoji }));
  };

  //
  return (
    <>
      <Stack direction="row" alignItems="center">
        {/* LIKE */}
        <IconButton
          onClick={() => handleClick("like")}
          sx={{ color: "secondary.main" }}
        >
          <ThumbUpRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Typography variant="h7" mr={1}>
          {comment?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton
          onClick={() => handleClick("dislike")}
          sx={{ color: "error.main" }}
        >
          <ThumbDownAltRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Typography variant="h7">{comment?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default CommentReaction;

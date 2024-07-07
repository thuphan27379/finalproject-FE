import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

import { sendPostReaction } from "./postSlice";

//
function PostReaction({ post }) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendPostReaction({ postId: post._id, emoji }));
  };

  //
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        {/* LIKE */}
        <IconButton onClick={() => handleClick("like")}>
          <ThumbUpRoundedIcon sx={{ fontSize: 18, color: "secondary.main" }} />
        </IconButton>
        <Typography variant="h7" mr={1}>
          {post?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton onClick={() => handleClick("dislike")}>
          <ThumbDownAltRoundedIcon sx={{ fontSize: 18, color: "error.main" }} />
        </IconButton>
        <Typography variant="h7">{post?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default PostReaction;

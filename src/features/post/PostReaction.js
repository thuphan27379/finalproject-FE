import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { sendPostReaction } from "./postSlice";

//
function PostReaction({ post }) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendPostReaction({ postId: post._id, emoji }));
  };

  // if current user is like => icon is Filled !!!
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        {/* LIKE */}
        <IconButton onClick={() => handleClick("like")}>
          <ThumbUpAltOutlinedIcon
            sx={{ fontSize: 18, color: "secondary.main" }}
          />
        </IconButton>
        <Typography variant="h7" mr={1}>
          {post?.reactions?.like}
        </Typography>

        {/* DISLIKE */}
        <IconButton onClick={() => handleClick("dislike")}>
          <ThumbDownAltOutlinedIcon
            sx={{ fontSize: 18, color: "error.main" }}
          />
        </IconButton>
        <Typography variant="h7">{post?.reactions?.dislike}</Typography>
      </Stack>
    </>
  );
}

export default PostReaction;

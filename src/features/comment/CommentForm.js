import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Stack, Avatar, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import useAuth from "../../hooks/useAuth";
import { createComment } from "./commentSlice";

//
function CommentForm({ postId }) {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ postId, content }));
    setContent("");
  };

  //
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ paddingBottom: "10px" }}
        >
          <Avatar src={user?.avatarUrl} alt={user.name} />

          <TextField
            fullWidth
            size="small"
            value={content}
            placeholder="Write a comment…"
            onChange={(event) => setContent(event.target.value)}
            sx={{
              ml: 1,
              mr: 1,
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: (theme) =>
                  `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />

          <IconButton type="submit">
            <SendIcon
              color="secondary"
              sx={{ fontSize: 23, color: "secondary", marginRight: "20px" }}
            />
          </IconButton>
        </Stack>
      </form>
    </>
  );
}

export default CommentForm;

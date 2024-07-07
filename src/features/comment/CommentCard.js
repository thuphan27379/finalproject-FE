import React from "react";
import {
  Avatar,
  Box,
  Paper,
  Stack,
  Typography,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";

import { fDate } from "../../utils/formatTime";
import CommentReaction from "./CommentReaction";
import { deleteComment } from "./commentSlice";
import useAuth from "../../hooks/useAuth";

//
function CommentCard({ comment }) {
  const { user } = useAuth();
  const currentUserId = user._id;
  //popover on icon to delete or edit
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // setIsEditing(false); // Reset editing mode when closing the popover
  };

  const open = Boolean(anchorEl);

  // handleDelete a post
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleDelete = () => {
    // Dispatch the deletePost action with the postId
    if (currentUser) {
    }
    dispatch(deleteComment({ commentId: comment._id, postId: comment.post }));

    handleClose(); //close popover
  };

  //
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        spacing={1}
        margin={0}
        lineHeight={0}
        padding={0}
        sx={{
          maxWidth: "808px",
          maxHeight: "105px",
          lineHeight: "0",
          p: "0",
          m: "0",
          "& .css-15hh60j-MuiStack-root > :not(style) ~ :not(style)": {
            marginRight: "8px", //
            paddingRight: "8px",
          },
          "& .css-10kbc59-MuiStack-root .css-p64cbd-MuiStack-root": {
            marginRight: "7px", //
            paddingRight: "8px",
            paddingBottom: "10px",
          },
          "& .css-ga6y80-MuiButtonBase-root-MuiIconButton-root": {
            padding: "0px",
          },
        }}
      >
        <Avatar alt={comment.author?.name} src={comment.author?.avatarUrl} />

        <Paper
          sx={{
            p: 1,
            flexGrow: 1,
            maxHeight: "110px",
            lineHeight: 0,
            "& .css-10kbc59-MuiStack-root .css-p64cbd-MuiStack-root": {
              marginRight: "7px", //
              paddingRight: "8px",
              paddingBottom: "10px",
            },
            backgroundColor: "rgb(244, 246, 248)",
          }}
        >
          <Stack
            direction="row"
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {comment.author?.name}
            </Typography>

            {/* More btn, if not currentUser => display: "none" */}
            {/* action= */}
            {currentUserId === comment.author._id && (
              <IconButton sx={{ color: "secondary" }}>
                <MoreVertIcon
                  onClick={handleClick}
                  sx={{ fontSize: 27, color: "secondary" }}
                />
              </IconButton>
            )}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Button sx={{ p: 1, fontSize: 12 }} onClick={handleDelete}>
                Delete
              </Button>
            </Popover>
          </Stack>

          {/* Date fai nam ke ben Author */}
          <Typography
            variant="caption"
            sx={{
              color: "text.disabled",
              paddingLeft: "0",
              marginTop: "-2px",
              display: "flex",
              alignItems: "start",
              fontSize: "11px",
            }}
          >
            {fDate(comment.createdAt)}
          </Typography>

          <Typography variant="body2" sx={{ color: "black" }}>
            {comment.content}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CommentReaction comment={comment} />
          </Box>
        </Paper>
      </Stack>
    </>
  );
}

export default CommentCard;

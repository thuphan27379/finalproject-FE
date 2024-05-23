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

//
function CommentCard({ comment }) {
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
    <Stack
      direction="row"
      spacing={1}
      margin={0}
      justifyContent={"space-between"}
      sx={{ maxHeight: "110px" }}
      lineHeight={0}
      padding={0}
    >
      <Avatar alt={comment.author?.name} src={comment.author?.avatarUrl} />

      <Paper
        sx={{
          p: 1,
          flexGrow: 1,
          bgcolor: "background.neutral",
          maxHeight: "110px",
          lineHeight: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {comment.author?.name}
          </Typography>
          {/* Date nam ke ben Author */}
          <Typography
            align="left"
            variant="caption"
            sx={{
              display: "flex",
              color: "text.disabled",
              alignContent: "left",
              paddingLeft: "0",
            }}
          >
            {fDate(comment.createdAt)}
          </Typography>
          <div>
            <IconButton>
              <MoreVertIcon onClick={handleClick} sx={{ fontSize: 30 }} />
            </IconButton>
          </div>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button sx={{ p: 1, fontSize: 10 }} onClick={handleDelete}>
              Delete
            </Button>{" "}
          </Popover>
        </Stack>

        {/* <Box sx={{ paddingTop: "0" }}>
        
        </Box> */}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {comment.content}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CommentReaction comment={comment} />
        </Box>
      </Paper>
    </Stack>
  );
}

export default CommentCard;

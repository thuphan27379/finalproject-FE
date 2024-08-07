import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { fDate } from "../../utils/formatTime";
import CommentReaction from "./CommentReaction";
import { deleteComment } from "./commentSlice";
import useAuth from "../../hooks/useAuth";

//
function CommentCard({ comment }) {
  const { user } = useAuth();
  const currentUserId = user._id;
  // popover on icon to delete or edit
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

    handleClose(); // close popover
  };

  //
  return (
    <>
      <Stack
        border="1px #0A3161" //?
        direction="row"
        justifyContent={"space-between"}
        spacing={1}
        margin={0}
        lineHeight={0}
        padding={0}
        sx={{
          borderColor: "1px solid #0A3161", //?
          maxWidth: "800px", // work
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
        }}
      >
        <Avatar alt={comment.author?.name} src={comment.author?.avatarUrl} />

        <Paper
          sx={{
            flexGrow: 1,
            maxHeight: "100px",
            lineHeight: 0,
            paddingLeft: 1,
            "& .css-10kbc59-MuiStack-root .css-p64cbd-MuiStack-root": {
              marginRight: "7px", //
              paddingRight: "8px",
              paddingBottom: "10px",
            },
            // borderColor: "1px #fff", // ?
            // backgroundColor: "#000",
          }}
        >
          <Stack
            direction="row"
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
            sx={{
              borderColor: "1px #fff",
              "& .MuiPaper-elevation .MuiPaper-rounded .MuiPaper-elevation1 .css-1vmzsl-MuiPaper-root":
                {
                  padding: 0,
                },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                // color: "#fff"
              }}
            >
              {comment.author?.name}
            </Typography>

            {/* More btn */}
            {currentUserId === comment.author._id && (
              <IconButton onClick={handleClick} sx={{ color: "secondary" }}>
                <MoreVertIcon sx={{ fontSize: 27, color: "secondary" }} />
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
              sx={{}}
            >
              <Button
                sx={{
                  p: 1,
                  fontSize: 12,
                  backgroundColor: "#8498b0",
                  color: "#061d3a",
                }}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Popover>
          </Stack>

          {/*  */}
          <Typography
            variant="caption"
            sx={{
              color: "text.disabled",
              paddingLeft: "0",
              marginTop: "-9px", // ?
              display: "flex",
              alignItems: "start",
              fontSize: "11px",
            }}
          >
            {fDate(comment.createdAt)}
          </Typography>

          <Typography
            variant="body2"
            // sx={{ color: "#fff" }}
          >
            {comment.content}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              "& .css-1d9cypr-MuiStack-root": { paddingRight: "20px" },
            }}
          >
            <CommentReaction comment={comment} />
          </Box>
        </Paper>
      </Stack>
    </>
  );
}

export default CommentCard;

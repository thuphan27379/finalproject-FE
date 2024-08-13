import React, { useCallback, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Link,
  Card,
  Stack,
  Avatar,
  Typography,
  CardHeader,
  IconButton,
  Popover,
  Button,
  alpha,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LoadingButton } from "@mui/lab";

import { fDate } from "../../utils/formatTime";
import useAuth from "../../hooks/useAuth";
import { FTextField, FUploadImage, FormProvider } from "../../components/form";
import PostReaction from "./PostReaction";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import { deletePost, editPost } from "../post/postSlice";
import FriendStatus from "../friend/FriendStatus";
import ActionButton from "../friend/ActionButton";

// show a post with comment and reaction, delete/edit
const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

// show list of posts
function PostCard({ post, profile }) {
  const defaultValues = {
    content: post.content,
    image: post.image,
  };

  // show relationship, from - to
  const { user } = useAuth();
  const currentUserId = user._id; // dang login
  // console.log(currentUserId);
  const [IsEditing, setIsEditing] = useState(true);

  // const { id: targetUserId, name, avatarUrl, friendship } = profile;

  // popover on icon to delete or edit
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsEditing(false); // Reset editing mode when closing the popover
  };

  // a window will pop up asking for confirmation to delete.
  const open = Boolean(anchorEl);

  // handleDelete a post
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleDelete = () => {
    // Dispatch the deletePost action with the postId
    if (currentUser) {
    }
    dispatch(deletePost({ postId: post._id }));
    // render after delete
    handleClose(); // close popover
  };

  // handleEdit a post
  const [editedContent, setEditedContent] = React.useState(post.content); // New state for edited content
  const [isEditing] = React.useState(false); // State to track editing mode
  const [openModal, setOpenModal] = React.useState(false);

  const handleContentChange = (e) => {
    e.stopPropagation();
    setEditedContent(e.target.value);
  };

  const handleInputMouseDown = (e) => {
    // Stop the event propagation to prevent closing the popover when clicking on the input
    e.stopPropagation();
  };

  //
  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues,
  });

  // modal edit
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = methods;

  //
  const onSubmit = (data) => {
    if (!data.image && post.image) {
      data.image = post.image;
    }
    dispatch(
      editPost({ postId: post._id, content: data.content, image: data.image })
    ).then(() => reset());
  };
  // console.log(post);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "image",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const { isLoading } = useSelector((state) => state.post);

  // chip show relationship
  // const friendStatus = (
  //   <FriendStatus
  //     sx={{ mt: 1 }}
  //     currentUserId={currentUserId}
  //     targetUserId={targetUserId}
  //     friendship={friendship}
  //   />
  // );

  //
  return (
    <>
      <Card
        style={{ border: "1px solid #B31942" }}
        sx={{
          borderRadius: "3px",
          lineHeight: "1",
        }}
      >
        <CardHeader
          disableTypography
          avatar={
            <Avatar src={post?.author?.avatarUrl} alt={post?.author?.name} />
          }
          title={
            <Link
              variant="subtitle2"
              color="text.primary"
              component={RouterLink}
              sx={{
                fontWeight: 700,
              }}
              to={`/user/${post.author._id}`}
            >
              {post?.author?.name}
            </Link>
          }
          subheader={
            <Typography
              variant="caption"
              sx={{ display: "block", color: "text.secondary" }}
            >
              {fDate(post.createdAt)}
            </Typography>
          }
          // More btn */}
          action={
            currentUserId === post.author._id && (
              <IconButton onClick={handleClick}>
                <MoreVertIcon sx={{ fontSize: 27 }} />
              </IconButton>
            )
          }
        />

        {/* friend status btn */}
        {/* {friendStatus ? (
          friendStatus
        ) : (
          <ActionButton
            sx={{ mt: 1 }}
            currentUserId={currentUserId}
            targetUserId={targetUserId}
            friendship={friendship}
          />
        )} */}

        {/* popover More btn*/}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
            backgroundColor: "#8498b0",
          }}
          sx={{ backgroundColor: "transparent" }}
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
          {/* | */}
          <div>
            <Button
              sx={{
                p: 1,
                fontSize: 12,
                backgroundColor: "#8498b0",
                color: "#061d3a",
              }}
              onClick={handleOpenModal}
            >
              Edit
            </Button>

            {/* popup modal for edit, KHONG THAY DOI CONTENT DC */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  p: 1,
                  width: 700,
                  height: 350,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* postForm: edit content */}
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                  // onChange={handleContentChange(setEditedContent)} // edit content post
                >
                  <Stack spacing={1}>
                    <FTextField
                      // content of the old Post, not placeholder
                      name="content"
                      multiline
                      fullWidth
                      rows={4}
                      sx={{
                        "& fieldset": {
                          borderWidth: `1px !important`,
                          borderColor: alpha("#919EAB", 0.32),
                        },
                      }}
                    />

                    {/* form edit image */}
                    <FUploadImage
                      // upload the image of the post
                      name="image"
                      accept="image/*"
                      maxSize={3145728}
                      onDrop={handleDrop}
                    />

                    <Box
                      // button submit edit a Post
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <LoadingButton
                        // loading...
                        type="cancel"
                        variant="outlined"
                        size="small"
                        onClose={handleCloseModal} //??
                        loading={isSubmitting || isLoading}
                      >
                        Cancel
                      </LoadingButton>
                      <LoadingButton
                        // loading...
                        type="submit"
                        variant="outlined"
                        size="small"
                        color="secondary"
                        loading={isSubmitting || isLoading}
                      >
                        Update
                      </LoadingButton>
                    </Box>
                  </Stack>
                </FormProvider>
              </Card>
            </Modal>
          </div>
        </Popover>

        {/* post content */}
        <Stack spacing={1} sx={{ pl: 4, pt: 1, pb: 1, pr: 4 }}>
          <Typography>{post.content}</Typography>

          {/* media, width & height ? */}
          {post.image && (
            <Box
              sx={{
                borderRadius: "1px",
                overflow: "hidden",
                height: "400px",
                "& img": { objectFit: "scale-down", width: 1, height: 1 },
              }}
            >
              <img src={post.image} alt="post" />
            </Box>
          )}

          {/*  */}
          <PostReaction post={post} />
          <CommentList postId={post._id} />
          <CommentForm postId={post._id} />
        </Stack>
      </Card>
    </>
  );
}

export default PostCard;

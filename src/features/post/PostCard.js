import React, { useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
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
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LoadingButton } from "@mui/lab";
// import { useFormContext, Controller } from "react-hook-form";

import { fDate } from "../../utils/formatTime";
import PostReaction from "./PostReaction";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";
import { deletePost, editPost } from "../post/postSlice";
import { FTextField, FUploadImage, FormProvider } from "../../components/form";
// import { editPost } from "../post/postSlice";
import FriendStatus from "../friend/FriendStatus";
import useAuth from "../../hooks/useAuth";
import ActionButton from "../friend/ActionButton";

//show a post with comment and reaction, delete/edit
const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: null,
};

//show list of posts
function PostCard({ post, profile }) {
  // show relationship
  // const { user } = useAuth();
  // const currentUserId = user.id;

  // const {
  //   id: targetUserId,
  //   name,
  //   jobTitle,
  //   coverUrl,
  //   avatarUrl,
  //   friendship,
  // } = profile;

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
  // a window will pop up asking for confirmation to delete.

  // handleDelete a post
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleDelete = () => {
    // Dispatch the deletePost action with the postId
    if (currentUser) {
    }
    dispatch(deletePost({ postId: post._id }));

    handleClose(); //close popover
  };

  // handleEdit a post
  const [editedContent, setEditedContent] = React.useState(post.content); // New state for edited content
  const [isEditing] = React.useState(false); // State to track editing mode
  const [openModal, setOpenModal] = React.useState(false);

  // const handleEdit = () => {
  //   // dispatch(PostForm({}));
  //   setIsEditing(true); // Set editing mode to true when the "Edit" button is clicked
  // };

  // const handleSave = () => {
  //   // Dispatch the editPost action with the edited content and post ID
  //   dispatch(
  //     editPost({ postId: post._id, content: editedContent, image: post.image })
  //   );
  //   setIsEditing(false); // Reset editing mode after saving changes
  //   handleClose();
  // };

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

  // const { setValue } = methods;

  // edit image
  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     if (file) {
  //       setValue(
  //         "image",
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       );
  //     }
  //   },
  //   [setValue]
  // );

  // modal edit
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = methods;

  const onSubmit = (data) => {
    if (!data.image && post.image) {
      data.image = post.image;
    }
    dispatch(
      editPost({ postId: post._id, content: data.content, image: data.image })
    ).then(() => reset());
  };

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

  // //show relationship
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
      <Card sx={{ padding: "2px", lineHeight: "1" }}>
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
              sx={{ fontWeight: 700 }}
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
          action={
            <IconButton>
              <MoreVertIcon onClick={handleClick} sx={{ fontSize: 27 }} />
            </IconButton>
          }
        />
        {/* show relationship ?!?! */}
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
          }}
        >
          <Button sx={{ p: 1, fontSize: 12 }} onClick={handleDelete}>
            Delete
          </Button>
          |
          <div>
            <Button sx={{ p: 1, fontSize: 12 }} onClick={handleOpenModal}>
              Edit
            </Button>

            {/* popup modal delete & edit */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card
                sx={{
                  p: 3,
                  width: 500,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* postForm: edit content */}
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Stack spacing={2}>
                    <FTextField
                      // content of the Post, not placeholder?!?!
                      name="content"
                      multiline
                      fullWidth
                      rows={4}
                      placeholder={post.content}
                      sx={{
                        "& fieldset": {
                          borderWidth: `1px !important`,
                          borderColor: alpha("#919EAB", 0.32),
                        },
                      }}
                    />

                    {/* form edit image */}
                    {/* UPLOAD A FILE: btn choose File  */}
                    {/* <input type="file" ref={fileInput} onChange={handleFile} /> */}
                    <FUploadImage
                      // upload the image of the post?!?!
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
                        onClose={handleClose}
                        // loading={isSubmitting || isLoading}
                      >
                        Cancel
                      </LoadingButton>
                      <LoadingButton
                        // loading...
                        type="submit"
                        variant="outlined"
                        size="small"
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
        <Stack spacing={2} sx={{ pl: 3, pt: 1, pb: 1 }}>
          <Typography>{post.content}</Typography>
          {/* {isEditing && (
          <input
            type="text"
            value={editedContent}
            onChange={handleContentChange}
            onMouseDown={handleInputMouseDown}
          />
        )} */}

          {/* media */}
          {post.image && (
            <Box
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                height: 500,
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

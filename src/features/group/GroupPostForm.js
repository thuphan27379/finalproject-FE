import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, alpha, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";
import { FormProvider, FTextField, FUploadImage } from "../../components/form";
import { createPostGroup } from "./groupSlice";

// phai biet dang o group nao
// gan them groupId vào post, list post theo groupid
// for create a new post in the group
// validate content
const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: "",
  postsByGroupId: "",
  // groupId: ""
};

//
function GroupPostForm() {
  const { isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const params = useParams();
  const groupId = params.groupId;
  const { user } = useAuth(); // get data of user from useAuth
  const currentUserId = user._id;
  const currentGroupId = params.groupId;
  const { singleGroup } = useSelector((state) => state.group); // Get group details from state

  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = methods;

  // drag & drop an image
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "image",
          Object.assign(file, {
            preview: URL.createObjectURL(file), // review before upload
          })
        );
      }
    },
    [setValue]
  );

  // and reset a form after create a post
  const onSubmit = (data) => {
    if (currentGroupId) {
      const isMember = singleGroup?.members?.includes(currentUserId);

      if (!isMember) {
        // toast.error("You must be a member of group")
        alert("You must be a member of the group to post.");
        return;
      }

      data.groupId = currentGroupId;

      data.fromGroup = true; // Set fromGroup to true
    } else {
      data.fromGroup = false; // Set fromGroup to false if not posting in a group
    }
    // console.log("post group", data);

    dispatch(createPostGroup(data)).then(() => reset()); // ??
  };

  // UI
  return (
    <>
      <Card
        sx={{ p: 1 }}
        style={{ border: "1px solid #B31942", boxShadow: "#e8bac6" }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <FTextField
              // content of post of the group
              name="content"
              multiline
              fullWidth
              rows={3}
              placeholder="Share your post into your group here..."
              sx={{
                "& fieldset": {
                  borderWidth: `1px !important`,
                  borderColor: alpha("#919EAB", 0.32),
                  border: "1px solid #B31942",
                },
                placeholderColor: "#fff", // ?
              }}
            />

            {/* UPLOAD A FILE: btn choose File  */}
            <FUploadImage
              // upload image with the Post
              name="image"
              accept="image/*"
              maxSize={3145728} // 3MB
              onDrop={handleDrop}
            />

            <Box
              // button submit a Post
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <LoadingButton
                // loading...
                type="submit"
                variant="outlined"
                size="small"
                loading={isSubmitting || isLoading}
              >
                Post Group
              </LoadingButton>
            </Box>
          </Stack>
        </FormProvider>
      </Card>
    </>
  );
}

export default GroupPostForm;

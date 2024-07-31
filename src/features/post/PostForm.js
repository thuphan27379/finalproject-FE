import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Card, alpha, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { FormProvider, FTextField, FUploadImage } from "../../components/form";
import { createPost } from "./postSlice";
import { getSingleGroup, createPostGroup } from "../group/groupSlice";

// for create a new post
// & on the group ?!?!
// validate content
const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: "",
};

//
function PostForm() {
  const { isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useAuth(); //get data of user from useAuth
  const params = useParams();
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

  /* UPLOAD A FILE (code along)*/
  // const fileInput = useRef();
  // const handleFile = (e) => {
  //   // console.log(fileInput.current.files[0]);
  //   const file = fileInput.current.files[0];
  //   if (file) {
  //     setValue("image", file);
  //   }
  // };

  // drag & drop a image //
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

  // reset a form after create a post
  const onSubmit = (data) => {
    data.fromGroup = false; // Set fromGroup to false if not posting in a group
    // console.log(data);

    dispatch(createPost(data)).then(() => reset());
  };

  // check if member join group ? //
  // get userId
  // get groupId, get members of group
  // if has params groupId, check if members include user, if yes can post
  // if not

  // Fetch group details if a group ID is present in the route
  useEffect(() => {
    if (currentGroupId) {
      dispatch(getSingleGroup(currentGroupId));
    }
  }, [dispatch, currentGroupId]);

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
              // content of the Post
              name="content"
              multiline
              fullWidth
              rows={3}
              placeholder="Share your ideas here..."
              sx={{
                "& fieldset": {
                  borderWidth: `1px !important`,
                  borderColor: alpha("#B31942", 0.5),
                },
                color: "#fff", // placeholder text?
              }}
            />

            {/* UPLOAD A FILE: btn choose File  */}
            {/* <input type="file" ref={fileInput} onChange={handleFile} /> */}
            <FUploadImage
              // upload image with the Post
              name="image"
              accept="image/*"
              maxSize={3145728} //3MB
              onDrop={handleDrop}
            />

            <Box
              // button submit a Post
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                // fontWeight: "800",
              }}
            >
              <LoadingButton
                // loading...
                type="submit"
                variant="contained"
                size="small"
                loading={isSubmitting || isLoading}
              >
                Post
              </LoadingButton>
            </Box>
          </Stack>
        </FormProvider>
      </Card>
    </>
  );
}

export default PostForm;

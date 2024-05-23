import React, { useCallback } from "react";
import { Box, Card, alpha, Stack } from "@mui/material";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FormProvider, FTextField, FUploadImage } from "../../components/form";
import { createPost } from "./postSlice";
// import { useRef } from "react";

// for create a new post
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

  const dispatch = useDispatch();

  /* UPLOAD A FILE (code along)*/
  // const fileInput = useRef();
  // const handleFile = (e) => {
  //   // console.log(fileInput.current.files[0]);
  //   const file = fileInput.current.files[0];
  //   if (file) {
  //     setValue("image", file);
  //   }
  // };

  // drag & drop a image ///////////
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
    dispatch(createPost(data)).then(() => reset());
  };

  //UI
  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FTextField
            // content of the Post
            name="content"
            multiline
            fullWidth
            rows={4}
            placeholder="Share what you are thinking here..."
            sx={{
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: alpha("#919EAB", 0.32),
              },
            }}
          />

          {/* UPLOAD A FILE: btn choose File  */}
          {/* <input type="file" ref={fileInput} onChange={handleFile} /> */}
          <FUploadImage
            // upload image with the Post
            name="image"
            accept="image/*"
            maxSize={3145728}
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
  );
}

export default PostForm;

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Box, Grid, Card, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import useAuth from "../../hooks/useAuth";
import { FormProvider, FTextField, FUploadAvatar } from "../../components/form";
import { fData } from "../../utils/numberFormat";
import { updateUserProfile } from "./userSlice";

// Account setting: for update profile & avt..
const UpdateUserSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

//
function AccountGeneral() {
  const { user } = useAuth();
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    jobTitle: user?.jobTitle || "",
    company: user?.company || "",
    avatarUrl: user?.avatarUrl || "",
    coverUrl: user?.coverUrl || "",
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    aboutMe: user?.aboutMe || "",
  };

  // editing form
  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //// drap&drop a image ///////////
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "avatarUrl",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const onSubmit = (data) => {
    dispatch(updateUserProfile({ userId: user._id, ...data }));
  };

  //
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            {/* update avatar */}
            <Card
              sx={{
                py: 4,
                px: 3,
                textAlign: "center",
              }}
            >
              <FUploadAvatar
                name="avatarUrl"
                accept="image/*"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  //lan dau tien chua bo hinh thi chua thay
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: "auto",
                      display: "block",
                      textAlign: "center",
                      color: "text.secondary",
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> Max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Card>
          </Grid>

          {/* update info */}
          <Grid
            item
            xs={12}
            md={8}
            spacing={2}
            sx={{
              "& .css-f3o4t6-MuiPaper-root-MuiCard-root": {
                margin: "0px",
              },
            }}
          >
            <Card sx={{ p: 1, m: 1, spacing: 1 }} spacing={2}>
              <Box
                sx={{
                  "& .css-10g9nb3": { rowGap: "10px" },
                  display: "grid",
                  rowGap: 2,
                  columnGap: 2,
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  },
                }}
              >
                <FTextField name="name" label="Name" />
                <FTextField name="email" label="Email" />

                <FTextField name="jobTitle" label="Job Title" />
                <FTextField name="company" label="Company" />

                <FTextField name="phoneNumber" label="Phone Number" />
                <FTextField name="address" label="Address" />

                <FTextField name="city" label="City" />
                <FTextField name="country" label="Country" />
              </Box>

              <Stack
                spacing={1}
                alignItems="flex-end"
                sx={{ mt: 2, rowGap: 1 }}
              >
                {/* <FTextField name="coverUrl" label="Home Profile Cover Image?" /> */}
                <FTextField
                  name="aboutMe"
                  multiline
                  rows={4}
                  label="About Me"
                />

                {/* btn Save */}
                <LoadingButton
                  sx={{ fontSize: "12px", mt: 0 }}
                  type="submit"
                  variant="outlined"
                  loading={isSubmitting || isLoading}
                >
                  Save Changes
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}

export default AccountGeneral;

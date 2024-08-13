import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Box, Grid, Card, Stack, Typography, alpha } from "@mui/material";
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
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    aboutMe: user?.aboutMe || "",
    others: user?.others || "",
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

  // drap&drop a image
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
        <Grid sx={{ minWidth: "750px" }} container spacing={2}>
          <Grid item xs={12} md={4}>
            {/* update avatar */}
            <Card
              style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
              sx={{
                width: "230px",
                py: 3,
                px: 3,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FUploadAvatar
                name="avatarUrl"
                accept="image/*"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  // lan dau tien chua bo hinh thi chua thay
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: "auto",
                      display: "block",
                      textAlign: "center",
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
              paddingTop: "-10px",
            }}
          >
            <Card
              style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
              sx={{ p: 1, m: 0, spacing: 1, width: "500px" }}
              spacing={2}
            >
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  columnGap: 2,
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  },
                }}
              >
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="name"
                  label="Name"
                />
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="email"
                  label="Email"
                />

                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="jobTitle"
                  label="Job Title"
                />
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="company"
                  label="Company"
                />

                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="phoneNumber"
                  label="Phone Number"
                />
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="address"
                  label="Address"
                />

                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="city"
                  label="City"
                />
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="country"
                  label="Country"
                />
              </Box>

              <Stack
                spacing={1}
                alignItems="flex-end"
                sx={{ mt: 2, rowGap: 1 }}
              >
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="others"
                  label="Others"
                  placeholder="Interests"
                />
                <FTextField
                  sx={{
                    "& fieldset": {
                      borderColor: alpha("#0A3161 ", 0.5),
                    },
                  }}
                  name="aboutMe"
                  multiline
                  rows={4}
                  label="About Me"
                />

                {/* btn Save */}
                <LoadingButton
                  sx={{ fontSize: "12px", mt: 0 }}
                  type="submit"
                  variant="contained"
                  loading={isSubmitting || isLoading}
                  color="secondary"
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

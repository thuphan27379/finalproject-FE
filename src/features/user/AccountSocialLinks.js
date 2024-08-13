import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Card, InputAdornment, alpha } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

import useAuth from "../../hooks/useAuth";
import { FormProvider, FTextField } from "../../components/form";
import { updateUserProfile } from "./userSlice";

// for edit social links
const SOCIAL_LINKS = [
  {
    value: "linkedinLink",
    icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
    placeholder: "www.linkedin.com/",
  },
  {
    value: "twitterLink",
    icon: <XIcon sx={{ fontSize: 24 }} />,
    placeholder: "www.x.com/",
  },
  {
    value: "instagramLink",
    icon: <InstagramIcon sx={{ fontSize: 27 }} />,
    placeholder: "www.instagram.com/",
  },
  {
    value: "youtubeLink",
    icon: <YouTubeIcon sx={{ fontSize: 28 }} />,
    placeholder: "www.youtube.com/",
  },
  {
    value: "facebookLink",
    icon: <FacebookIcon sx={{ fontSize: 27 }} />,
    placeholder: "www.facebook.com/",
  },
];

//
function AccountSocialLinks() {
  const { user } = useAuth();
  const isLoading = useSelector((state) => state.user.isLoading);

  const defaultValues = {
    facebookLink: user?.facebookLink || "",
    instagramLink: user?.instagramLink || "",
    linkedinLink: user?.linkedinLink || "",
    twitterLink: user?.twitterLink || "",
    youtubeLink: user?.youtubeLink || "",
  };

  // form for editing
  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(updateUserProfile({ userId: user._id, ...data }));
  };

  //
  return (
    <>
      <Card
        style={{
          width: "750px",
          border: "1px solid #0A3161",
          borderRadius: "3px",
          placeholderColor: "#fff",
        }}
        sx={{ p: 1, width: "750px", marginBottom: "300px" }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ width: "750px" }} spacing={1} alignItems="flex-end">
            {SOCIAL_LINKS.map((link) => (
              <FTextField
                sx={{
                  width: "750px",
                  "& fieldset": {
                    borderColor: alpha("#0A3161 ", 0.5),
                  },
                }}
                key={link.value}
                name={link.value}
                placeholder={link.placeholder}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {link.icon}
                    </InputAdornment>
                  ),
                }}
              />
            ))}

            <LoadingButton
              sx={{ fontSize: "12px" }}
              type="submit"
              variant="contained"
              loading={isSubmitting || isLoading}
              color="secondary"
            >
              Save Changes
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Card>
    </>
  );
}

export default AccountSocialLinks;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, alpha, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";
import { FormProvider, FTextField } from "../../components/form";
import { createGroup } from "./groupSlice";

// create a new group with name, description, interest
// validate content
const yupSchema = Yup.object().shape({
  name: Yup.string().required("Content is required"),
  description: Yup.string().required("Content is required"),
  interests: Yup.string().required("Content is required"),
});

const defaultValues = {
  name: "",
  description: "",
  interests: "",
};

//
function GroupForm() {
  const { user } = useAuth();
  const { isLoading } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  // reset a form after create a group
  const onSubmit = async (data) => {
    dispatch(createGroup(data)).then(() => reset());
    // console.log(data);
  };

  //
  return (
    <>
      <Card
        sx={{
          width: "750px",
          p: 1,
          marginLeft: "20px",
          marginTop: "20px",
        }}
        fullWidth
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
      >
        <Typography sx={{ paddingBottom: "15px", fontSize: "20px" }}>
          Create own group and join with friend!
        </Typography>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <FTextField
                label="Group name:"
                name="name"
                placeholder="Name of your group..."
                sx={{
                  "& fieldset": {
                    borderWidth: `1px !important`,
                    borderColor: alpha("#0A3161", 0.5),
                  },
                }}
              ></FTextField>

              <FTextField
                label="Interest:"
                name="interests"
                placeholder="Eg: Startup, Domain,..."
                sx={{
                  "& fieldset": {
                    borderWidth: `1px !important`,
                    borderColor: alpha("#0A3161 ", 0.5),
                  },
                }}
              ></FTextField>
            </Box>

            <FTextField
              label="Description:"
              name="description"
              placeholder="Something about your group..."
              multiline
              fullWidth
              sx={{
                "& fieldset": {
                  borderWidth: `1px !important`,
                  borderColor: alpha("#0A3161 ", 0.5),
                },
              }}
            ></FTextField>

            <Box
              // button submit a group
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
                color="secondary"
              >
                Create
              </LoadingButton>
            </Box>
          </Stack>
        </FormProvider>
      </Card>
    </>
  );
}

export default GroupForm;

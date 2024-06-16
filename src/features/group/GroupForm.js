import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { Box, Card, alpha, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FormProvider, FTextField, FUploadImage } from "../../components/form";
// import { createGroup } from "./groupSlice";

// create a new group with name, description, interest
// validate content
const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  name: "",
  description: "",
  interest: "",
};

function GroupForm() {
  const { isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

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

  // reset a form after create a post
  //  const onSubmit = (data) => {
  //   dispatch(createGroup(data)).then(() => reset());
  // };

  //
  return (
    <>
      <div>
        GroupForm - users can create a new group by providing a group name,
        group description, and selecting a interest
      </div>
    </>
  );
}

export default GroupForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuth from "../hooks/useAuth";
import { FormProvider, FTextField, FCheckbox } from "../components/form";

// yup validate input
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  // passwordConfirmation: Yup.string()
  //   .required("Please confirm your password")
  //   .oneOf([Yup.ref("password")], "Passwords must match"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  // passwordConfirmation: "",
  remember: true,
};

// func register a new account
function RegisterPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  // const [showPasswordConfirmation, setShowPasswordConfirmation] =
  //   useState(false);

  // yup
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  // submit form
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      await auth.register({ name, email, password }, () => {
        navigate("/blog", { replace: true }); //
      });
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };

  //
  return (
    <>
      <Container
        maxWidth="xs"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            {/* message error */}
            {!!errors.responseError && (
              <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <Alert
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderColor: "1px #B31942", // ?
                variant: "outlined",
              }}
              severity="info" // icon type
              color="secondary" // icon color
            >
              Already have an account!{" "}
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Log in now
              </Link>
            </Alert>

            {/* input  */}
            <FTextField name="name" label="Name" />
            <FTextField name="email" label="Email address" />
            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <FTextField
            name="passwordConfirmation"
            label="Password Confirmation"
            type={showPasswordConfirmation ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                    edge="end"
                  >
                    {showPasswordConfirmation ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          /> */}

            {/* remember me & forgot pw */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FCheckbox name="remember" label="Remember me" />
            </Stack>

            {/* register btn */}
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              loading={isSubmitting}
              color="secondary"
              sx={{ backgroundColor: "#8498b0" }} //
            >
              Register
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Container>
    </>
  );
}

export default RegisterPage;

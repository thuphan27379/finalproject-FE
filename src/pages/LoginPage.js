import React, { useState } from "react";
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
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; //validate us&pw
import * as Yup from "yup";

import { FCheckbox, FormProvider, FTextField } from "../components/form";
import useAuth from "../hooks/useAuth";

// CODERCOMM
// Yup: validate input
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: true,
};

//
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false); //hien an ky tu trong password
  //
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  // dau ra cua data
  const onSubmit = async (data) => {
    const from = location.state?.from?.pathname || "/blog";
    let { email, password } = data;

    try {
      await auth.login({ email, password }, () => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      console.log(error);
      reset();
      setError("responseError", error);
    }
  };

  // render to HTML
  return (
    <>
      <Container maxWidth="xs">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            {/* message error & go to sign up */}
            {!!errors.responseError && (
              <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <Alert severity="info">
              Don’t have an account yet?{" "}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Let's get started now
              </Link>
            </Alert>

            {/* form */}
            <FTextField name="email" label="Email address" />
            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              // icon an hien ky tu pw
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
          </Stack>

          {/* remember me & forgot pw */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FCheckbox name="remember" label="Remember me" />
            <Link component={RouterLink} variant="subtitle2" to="/">
              Forgot password?
            </Link>
          </Stack>

          {/* btn submit */}
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="outlined"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </FormProvider>
      </Container>
    </>
  );
}

export default LoginPage;

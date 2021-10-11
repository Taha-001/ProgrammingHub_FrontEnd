import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useInput from "../hooks/use-input";
import { signupInitiate } from "../Redux/Action/actions";

const theme = createTheme();

export default function SignUpPage() {
  const {
    hasError: usernameHasError,
    value: username,
    valueChangeHandler: usernameChangeHandler,
    blurChangeHandler: usernameBlurHandler,
    isValid: usernameIsValid,
  } = useInput((value) => value.length > 6);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    hasError: emailHasError,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    blurChangeHandler: passwordBlurHandler,
    hasError: passwordHasError,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    valueChangeHandler: confirmPasswordChangeHandler,
    blurChangeHandler: confirmPasswordBlurHandler,
    hasError: confirmPasswordHasError,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    enteredPassword === enteredConfirmPassword
  ) {
    formIsValid = true;
  }

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const displayName = data.get("username");

    dispatch(signupInitiate(email, password, displayName));
    // eslint-disable-next-line no-console
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("/image 1.png")`,
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={usernameHasError}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                value={username}
                helperText={
                  usernameHasError && "Please enter a valid username."
                }
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                variant="filled"
              />
              <TextField
                error={emailHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                helperText={emailHasError && "Please enter a valid email."}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
              />
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    value={enteredPassword}
                    autoComplete="password"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    autoFocus
                    variant="filled"
                    error={passwordHasError}
                    helperText={passwordHasError && "Please enter a password."}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onBlur={confirmPasswordBlurHandler}
                    onChange={confirmPasswordChangeHandler}
                    value={enteredConfirmPassword}
                    required
                    fullWidth
                    variant="filled"
                    id="Confirm Password"
                    label="Confirm Password"
                    name="Confirm Password"
                    autoComplete="Confirm Password"
                    error={confirmPasswordHasError}
                    helperText={
                      confirmPasswordHasError &&
                      "Please re-enter the password and check if it matches with the password."
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  <Link href="/learn" to="/learn" />;
                }}
                disabled={!formIsValid}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2" to="/">
                    {"Already have an account? Login."}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

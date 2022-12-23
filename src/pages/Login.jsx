import React, { useState } from "react";

import { UseAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";

import {
  styled,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Alert,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const GithubButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#000000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#222222",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000000",
  },
});

const Login = () => {
  const { logIn, loginGoogle, loginGithub } = UseAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errorLogIn, setErrorLogIn] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setErrorLogIn(error.message);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginGithub = async () => {
    try {
      await loginGithub();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingX: "24px",
        background: "#afafaf",
      }}
    >
      <Card sx={{ width: { xs: "100%", sm: 400, md: 450, lg: 470 } }}>
        <CardMedia
          component="img"
          height="150"
          image="https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg"
          alt="rick and morty"
        />

        <CardContent component="div">
          <Typography gutterBottom variant="h5" align="center">
            Iniciar Sesión
          </Typography>

          {errorLogIn && (
            <Alert sx={{ marginY: "16px" }} variant="outlined" severity="error">
              {errorLogIn}
            </Alert>
          )}

          <Box onSubmit={handleSubmit} component="form">
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <OutlinedInput
              id="input-email"
              type="email"
              autoComplete="email"
              fullWidth={true}
              sx={{ marginBottom: "10px" }}
              value={email}
              onChange={handleChangeEmail}
            />

            <InputLabel htmlFor="outlined-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-password"
              type={showPassword ? "text" : "password"}
              fullWidth={true}
              value={password}
              onChange={handleChangePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <CardActions>
              <Button
                sx={{ marginY: "10px" }}
                variant="contained"
                color="warning"
                fullWidth={true}
                endIcon={<LoginIcon />}
                type="submit"
              >
                Inicar
              </Button>
            </CardActions>
          </Box>

          <Typography variant="body1" align="center">
            Inicia Sesión con
          </Typography>

          <Stack
            component="div"
            direction={{ sx: "column", md: "row" }}
            justifyContent="center"
            spacing={3}
            gap={2}
            sx={{ marginY: "12px" }}
          >
            <Button
              onClick={handleLoginGoogle}
              variant="contained"
              startIcon={<GoogleIcon />}
              color="success"
            >
              Google
            </Button>

            <GithubButton
              onClick={handleLoginGithub}
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              Github
            </GithubButton>
          </Stack>

          <Box textAlign="center">
            <Typography gutterBottom variant="body2" component="span">
              ¿Ya estás registrado?
            </Typography>
            <Link to="/signup">
              <Button
                sx={{ marginLeft: "8px", fontWeight: "bold" }}
                variant="text"
                color="warning"
              >
                Registrarse
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

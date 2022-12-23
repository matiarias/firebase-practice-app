import React, { useState } from "react";

import { UseAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
  Alert,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const { signUp } = UseAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

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
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
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
        paddingX: "20px",
        background: "#afafaf",
      }}
    >
      <Card sx={{ width: { xs: "100%", sm: 400, md: 450, lg: 470 } }}>
        <CardMedia
          component="img"
          height="150"
          image="https://c4.wallpaperflare.com/wallpaper/152/633/174/rick-and-morty-wallpaper-preview.jpg"
          alt="rick and morty 2"
        />
        <CardContent component="div">
          <Typography gutterBottom variant="h5" align="center">
            Registrarse
          </Typography>

          {error && (
            <Alert sx={{ marginY: "8px" }} variant="outlined" severity="error">
              {error}
            </Alert>
          )}

          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ padding: "10px" }}
          >
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <TextField
              id="input-email"
              type="email"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              sx={{ marginBottom: "10px" }}
              value={email}
              onChange={handleChangeEmail}
            />

            <InputLabel htmlFor="outlined-password">Password</InputLabel>

            <OutlinedInput
              id="outlined-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              color="secondary"
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
                sx={{ marginY: "12px" }}
                variant="contained"
                color="secondary"
                fullWidth={true}
                endIcon={<LoginIcon />}
                type="submit"
              >
                Registrarse
              </Button>
            </CardActions>
          </Box>

          <Box textAlign="center">
            <Typography gutterBottom variant="body2" component="span">
              Si ya estas registrado
            </Typography>
            <Link to="/login">
              <Button
                sx={{ marginLeft: "8px", fontWeight: "bold" }}
                variant="text"
                color="secondary"
              >
                Inicar Sesión
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;

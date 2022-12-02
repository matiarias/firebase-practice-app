import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
          alt="beach"
        />

        <CardContent component="div">
          <Typography gutterBottom variant="h5">
            Iniciar Sesión
          </Typography>

          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ padding: "10px" }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              color="primary"
              fullWidth={true}
              sx={{ marginBottom: "10px" }}
              value={email}
              onChange={handleChangeEmail}
            />

            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              color="primary"
              fullWidth={true}
              value={password}
              onChange={handleChangePassword}
            />

            <CardActions>
              <Button
                sx={{ marginY: "12px" }}
                variant="contained"
                color="primary"
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
            direction="row"
            spacing={4}
            sx={{ marginY: "12px", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              color="error"
            >
              Google
            </Button>
            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              color="info"
            >
              Facebook
            </Button>
          </Stack>

          <Box textAlign="center">
            <Typography gutterBottom variant="body2" component="span">
              ¿Ya estás registrado?
            </Typography>
            <Link
              style={{
                color: "blue",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
              to="/signup"
            >
              Registrarse
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";

const SignUp = () => {
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
          image="https://cdn.pixabay.com/photo/2016/11/29/06/28/bay-1867798_960_720.jpg"
          alt="hawaii beach"
        />
        <CardContent component="div">
          <Typography gutterBottom variant="h5">
            Registrarse
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
              color="success"
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
              color="success"
              fullWidth={true}
              value={password}
              onChange={handleChangePassword}
            />

            <CardActions>
              <Button
                sx={{ marginY: "12px" }}
                variant="contained"
                color="success"
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
            <Link
              style={{
                color: "darkgreen",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
              to="/login"
            >
              Inicia Sesión
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;

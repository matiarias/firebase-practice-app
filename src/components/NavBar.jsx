import React from "react";
import { Link } from "react-router-dom";

import { UseAuth } from "../context/AuthContext";

import { Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  const { user, logOut } = UseAuth();
  console.log(user);

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <AppBar sx={{ background: "rgba(0,0,125,0.8)" }} position="static">
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Firebase Practice</Typography>
        {user ? (
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">{user?.email}</Typography>

            <Button
              onClick={handleLogOut}
              size="small"
              variant="contained"
              color="success"
            >
              Cerrar Sesión
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Link to="login">
              <Button size="small" variant="contained" color="secondary">
                Iniciar Sesión
              </Button>
            </Link>

            <Link to="signup">
              <Button size="small" variant="contained" color="success">
                Registrarse
              </Button>
            </Link>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

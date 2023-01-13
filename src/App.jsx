import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

import { AuthContextProvider } from "./context/AuthContext";

// import { ProtectedRoutes } from "./routes/ProtectedRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/favs" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
};

export default App;

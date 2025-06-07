import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
import ChatPage from "../pages/ChatPage/ChatPage";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default Router;

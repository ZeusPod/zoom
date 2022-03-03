import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../helpers/routes";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import HomePage from "../Pages/HomePage";
import MeetingPage from "../Pages/MeetingPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.signin} element={<SignInPage />} />
      <Route path={routes.signup} element={<SignUpPage />} />
      <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
      <Route path={routes.meeting} element={<MeetingPage />} />
    </Routes>
  );
}

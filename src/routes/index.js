import * as React from "react";
import { Routes, Route } from "react-router-dom";

import AuthRequire from "./AuthRequire";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";
import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import Projects from "../pages/Projects";
import Aboutus from "../pages/AboutUs";
import Domains from "../pages/Domains";
import Startup from "../pages/Startup";

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <Routes>
      {/* public */}
      <Route element={<HomeLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/" element={<Aboutus />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Domains />} />
        <Route path="/" element={<Startup />} />
        {/* CODERCOMM */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/user/:userId" element={<UserProfilePage />} />
      </Route>

      {/* login/signup */}
      <Route path="/" element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* login require  HIEN TAI KHONG LOGIN VAN VO ACCOUNT VA PROFILE DC*/}
      <Route path="/" element={<HomeLayout />}>
        <Route
          path="/blog"
          element={
            <AuthRequire>
              <BlogPage />
            </AuthRequire>
          }
        />
        <Route
          path="/account"
          element={
            <AuthRequire>
              <AccountPage />
            </AuthRequire>
          }
        />

        <Route
          path="/admin"
          element={
            <AuthRequire>
              <AdminPage />
            </AuthRequire>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;

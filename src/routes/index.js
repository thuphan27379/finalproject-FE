import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import Projects from "../pages/Projects";
import Aboutus from "../pages/AboutUs";
import Domains from "../pages/Domains";
import Startup from "../pages/Startup";

import AuthRequire from "./AuthRequire";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";
import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import Group from "../features/group/Group"; // group component
import GroupPage from "../pages/GroupPage"; // group page

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <>
      <Routes>
        {/* public */}
        <Route element={<HomeLayout />}>
          {/* company */}
          <Route index path="/" element={<HomePage />} />
          <Route path="/" element={<Aboutus />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Domains />} />
          <Route path="/" element={<Startup />} />
          {/* CODERCOMM */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/user/:userId" element={<UserProfilePage />} />
        </Route>

        {/* login/signup */}
        <Route path="/" element={<BlankLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* login require  */}
        <Route path="/" element={<HomeLayout />}>
          <Route
            path="/user/:userId"
            element={
              <AuthRequire>
                <UserProfilePage />
              </AuthRequire>
            }
          />

          <Route
            path="/account" //login
            element={
              <AuthRequire>
                <AccountPage />
              </AuthRequire>
            }
          />

          <Route
            path="/group/:groupId" // /:groupId
            element={
              <AuthRequire>
                <Group />
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
    </>
  );
}

export default Router;

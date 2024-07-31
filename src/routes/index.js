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
import Group from "../features/group/Group"; // group component trong blog

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <>
      <Routes>
        {/* public */}
        <Route element={<HomeLayout />}>
          {/* company */}
          <Route index path="/" element={<HomePage />} />
          {/* about */}
          <Route path="/about" element={<Aboutus />} />
          {/* project */}
          <Route path="/project" element={<Projects />} />
          {/* startup */}
          <Route path="/startup" element={<Startup />} />
          {/* domain */}
          <Route path="/domain" element={<Domains />} />
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
            path="/blog"
            element={
              <AuthRequire>
                <BlogPage />
              </AuthRequire>
            }
          />

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
            path="/group/:groupId" //  <GroupPage />
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
